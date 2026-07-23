// Web Worker for Offloading Heavy Math & Compression Tasks
self.onmessage = async (e) => {
  const { type, payload } = e.data;

  if (type === 'COMPRESS_IMAGE') {
    const { fileName, fileSize } = payload;
    console.log(`[calcWorker] Started local Wasm compression for: ${fileName} (${fileSize} MB)`);

    // Simulate progressive chunk-by-chunk Wasm processing loop
    let percent = 0;
    const interval = setInterval(() => {
      percent += 10;
      self.postMessage({ type: 'PROGRESS', payload: { percent, fileName } });

      if (percent >= 100) {
        clearInterval(interval);
        
        // Simulating 75% file compression ratio output
        const compressedSize = (parseFloat(fileSize) * 0.25).toFixed(2);

        self.postMessage({
          type: 'SUCCESS',
          payload: {
            fileName,
            originalSize: fileSize,
            compressedSize,
            downloadUrl: '#compressed-media-download'
          }
        });
      }
    }, 150);
  }
};
