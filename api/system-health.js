import os from 'os';

export default function handler(req, res) {
  // Get memory stats
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const usedMem = totalMem - freeMem;
  
  // Get CPU stats
  const cpus = os.cpus();
  const cpuModel = cpus.length > 0 ? cpus[0].model : 'Bilinmeyen İşlemci';
  const numCores = cpus.length;
  const loadAvg = os.loadavg(); // [1, 5, 15] minute averages

  // Uptime
  const uptime = os.uptime();

  res.status(200).json({
    status: 'success',
    memory: {
      totalGB: (totalMem / (1024 ** 3)).toFixed(2),
      usedGB: (usedMem / (1024 ** 3)).toFixed(2),
      freeGB: (freeMem / (1024 ** 3)).toFixed(2),
      usagePercent: Math.round((usedMem / totalMem) * 100) || 0
    },
    cpu: {
      model: cpuModel,
      cores: numCores,
      load1m: loadAvg[0].toFixed(2),
      load5m: loadAvg[1].toFixed(2),
      load15m: loadAvg[2].toFixed(2),
      // Rough estimate of current cpu load percentage based on 1m loadavg
      usagePercent: Math.min(100, Math.round((loadAvg[0] / numCores) * 100)) || 0
    },
    uptime: {
      seconds: uptime,
      formatted: formatUptime(uptime)
    }
  });
}

function formatUptime(seconds) {
  const d = Math.floor(seconds / (3600*24));
  const h = Math.floor(seconds % (3600*24) / 3600);
  const m = Math.floor(seconds % 3600 / 60);
  
  const dDisplay = d > 0 ? d + "g " : "";
  const hDisplay = h > 0 ? h + "s " : "";
  const mDisplay = m > 0 ? m + "d" : "";
  return dDisplay + hDisplay + mDisplay || "<1dk";
}
