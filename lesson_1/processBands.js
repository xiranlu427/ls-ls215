let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map(band => {
    let capitalizedName = capName(band.name);
    let newName = removeDotsInName(capitalizedName);

    return {
      name: newName,
      country: 'Canada',
      active: band.active,
    };
  });
}

function capName(name) {
  return name.split(' ')
             .map(part => part[0].toUpperCase() + part.slice(1))
             .join(' ');
}

function removeDotsInName(name) {
  const nameParts = name.split(' ');
  const partsWithoutDots = nameParts.map(part => {
    if (part.endsWith('.')) {
      return part.slice(0, -1);
    }
    return part;
  });

  return partsWithoutDots.join(' ');
}

processBands(bands);

// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]