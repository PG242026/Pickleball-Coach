(function () {
  function wachtOpVideoMetadata(video) {
    return new Promise((resolve, reject) => {
      if (video.readyState >= 1 && video.duration) {
        resolve();
        return;
      }

      const klaar = () => {
        opruimen();
        resolve();
      };
      const fout = () => {
        opruimen();
        reject(new Error('Video kon niet gelezen worden'));
      };
      const opruimen = () => {
        video.removeEventListener('loadedmetadata', klaar);
        video.removeEventListener('error', fout);
      };

      video.addEventListener('loadedmetadata', klaar);
      video.addEventListener('error', fout);
    });
  }

  function wachtOpSeek(video) {
    return new Promise((resolve) => {
      const klaar = () => {
        video.removeEventListener('seeked', klaar);
        resolve();
      };
      video.addEventListener('seeked', klaar, { once: true });
    });
  }

  async function maakVideoFrames(video, aantal = 6) {
    await wachtOpVideoMetadata(video);
    const duur = video.duration || 0;
    if (!duur || duur < 1) throw new Error('Video is nog niet klaar');

    const oudeTijd = video.currentTime || 0;
    video.pause();

    const canvas = document.createElement('canvas');
    const breedte = 640;
    const ratio = (video.videoHeight || 360) / (video.videoWidth || 640);
    canvas.width = breedte;
    canvas.height = Math.max(1, Math.round(breedte * ratio));
    const ctx = canvas.getContext('2d');
    const frames = [];
    const totaal = Math.min(aantal, Math.max(3, Math.ceil(duur / 2)));

    for (let i = 0; i < totaal; i++) {
      const sec = Math.min(duur - 0.1, (duur * (i + 1)) / (totaal + 1));
      video.currentTime = sec;
      await wachtOpSeek(video);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      frames.push({
        sec,
        timeLabel:
          String(Math.floor(sec / 60)).padStart(2, '0') +
          ':' +
          String(Math.floor(sec % 60)).padStart(2, '0'),
        dataUrl: canvas.toDataURL('image/jpeg', 0.72)
      });
    }

    video.currentTime = oudeTijd;
    return frames;
  }

  window.analyseerMetAI = async function () {
    try {
      const video = document.getElementById('leerlingVideo');
      const blob = window.huidigeVideoBlob || (window.recordedChunks && window.recordedChunks[0]) || null;

      if (!video || (!blob && !video.src)) {
        toonMelding('⚠️ Neem eerst een spelersvideo op of upload een video');
        return;
      }

      toonMelding('🤖 Videobeelden klaarmaken');
      const frames = await maakVideoFrames(video, 6);

      toonMelding('🤖 AI analyse gestart');
      const response = await fetch('/api/analyse-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          frames,
          speler: spelerNaam.value,
          niveau: niveau.value,
          techniek: techniek.value,
          taal: localStorage.getItem('pickleballTaal') || 'nl'
        })
      });

      const data = await response.json();
      if (!response.ok) {
        console.error(data);
        toonMelding('❌ ' + (data.error || 'AI analyse mislukt'));
        return;
      }

      aiAnalyseVak.style.display = 'block';
      aiAnalyseTekst.innerText = data.analyse || 'Geen analyse ontvangen.';
      maakAIMomenten(data.analyse || '');
      toonMelding('✅ AI analyse klaar');
    } catch (error) {
      console.error(error);
      toonMelding('❌ AI fout: ' + (error.message || 'onbekend'));
    }
  };
})();
