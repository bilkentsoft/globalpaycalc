// Timezone Overlap Calculator Engine for Global Remote Teams

export const globalTimezones = [
  { id: 'US_PACIFIC', name: 'US Pacific (San Francisco / LA)', offset: -7, flag: '🇺🇸', city: 'San Francisco' },
  { id: 'US_EASTERN', name: 'US Eastern (New York / Miami)', offset: -4, flag: '🇺🇸', city: 'New York' },
  { id: 'UK_GMT', name: 'UK (London / GMT / BST)', offset: 1, flag: '🇬🇧', city: 'London' },
  { id: 'EU_CENTRAL', name: 'Central Europe (Berlin / Paris / Madrid)', offset: 2, flag: '🇩🇪', city: 'Berlin' },
  { id: 'TR_EET', name: 'Turkey (Istanbul / TRT)', offset: 3, flag: '🇹🇷', city: 'Istanbul' },
  { id: 'UAE_GST', name: 'UAE (Dubai / GST)', offset: 4, flag: '🇦🇪', city: 'Dubai' },
  { id: 'IN_IST', name: 'India (Bangalore / IST)', offset: 5.5, flag: '🇮🇳', city: 'Bangalore' },
  { id: 'SG_SGT', name: 'Singapore / Bali', offset: 8, flag: '🇸🇬', city: 'Singapore' },
  { id: 'JP_JST', name: 'Japan (Tokyo / JST)', offset: 9, flag: '🇯🇵', city: 'Tokyo' },
  { id: 'AU_AEST', name: 'Australia (Sydney / AEST)', offset: 10, flag: '🇦🇺', city: 'Sydney' }
];

export function calculateTimezoneOverlap(tzA_id = 'US_PACIFIC', tzB_id = 'TR_EET', workStart = 9, workEnd = 17) {
  const tzA = globalTimezones.find(t => t.id === tzA_id) || globalTimezones[0];
  const tzB = globalTimezones.find(t => t.id === tzB_id) || globalTimezones[4];

  const timeDifferenceHours = tzB.offset - tzA.offset;

  // Generate 24-hour visual grid
  const hourlyGrid = [];
  let overlappingHoursCount = 0;

  for (let hourA = 0; hourA < 24; hourA++) {
    // Equivalent hour in Location B
    let hourB = (hourA + timeDifferenceHours + 24) % 24;
    
    const isWorkA = hourA >= workStart && hourA < workEnd;
    const isWorkB = hourB >= workStart && hourB < workEnd;
    const isOverlap = isWorkA && isWorkB;

    if (isOverlap) overlappingHoursCount++;

    hourlyGrid.push({
      hourA,
      hourB,
      formattedA: `${hourA.toString().padStart(2, '0')}:00`,
      formattedB: `${Math.floor(hourB).toString().padStart(2, '0')}:00`,
      isWorkA,
      isWorkB,
      isOverlap
    });
  }

  return {
    tzA,
    tzB,
    timeDifferenceHours,
    overlappingHoursCount,
    hourlyGrid,
    workStart,
    workEnd
  };
}
