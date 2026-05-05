function getAnchorVariants(title, intent) {
  const base = title;

  const anchors = {
    BUY: [
      `Best ${base}`,
      `Get ${base} here`,
      `Buy ${base} software`,
      `Start with ${base}`,
      `${base} pricing`
    ],

    TOOL: [
      `${base} tool`,
      `${base} software`,
      `How ${base} works`,
      `${base} system`,
      `Use ${base}`
    ],

    HOWTO: [
      `How to use ${base}`,
      `Guide to ${base}`,
      `Learn ${base}`,
      `${base} tutorial`,
      `Step-by-step ${base}`
    ],

    PROBLEM: [
      `Fix ${base} issues`,
      `${base} solution`,
      `Solve ${base}`,
      `Resolve ${base} problem`,
      `${base} fix`
    ],

    STRATEGY: [
      `${base} strategy`,
      `Improve with ${base}`,
      `${base} system`,
      `Scale using ${base}`,
      `${base} method`
    ],

    PLATFORM: [
      `${base} platform`,
      `${base} system`,
      `${base} ecosystem`,
      `Use ${base} platform`,
      `${base} tools`
    ]
  };

  return anchors[intent] || anchors.TOOL;
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = { getAnchorVariants, pickRandom };
