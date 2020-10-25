//NOTE: label of "Custom" allows a custom message to be typed.

const YES_RESPONSES = [
  {
    label: "Accept Item",
    value:
      "Yes, we will accept this item for reuse. We are confident we can find your item a " +
      "new home! Bring your item through our donations center Wednesday through Monday " +
      "9 a.m. to 4 p.m., or 10 a.m. to 4 p.m. on Sunday. Our donations center is closed on " +
      "Tuesday.",
  },
  {
    label: "Custom",
    value:
      "",
  },
];

const MAYBE_RESPONSES = [
  {
    label: "Maybe",
    value:
      "Maybe. We might accept this item for reuse, but we would first like to see it in " +
      "person to make a final determination. Bring your item through our donations center " +
      "Wednesday through Monday, 9 a.m. to 4 p.m., or 10 a.m. to 4 p.m. on Sunday. Our " +
      "donations center is closed on Tuesday.",
  },
  {
    label: "Custom",
    value:
      "",
  },
];

const NO_RESPONSES = [
  {
    label: "Damaged, Garbage",
    value:
      "No, we cannot accept this item for reuse. This item has seen better days and " +
      "should be disposed in your garbage.",
  },
  {
    label: "Damaged, Transfer Station",
    value:
      "No, we cannot accept this item for reuse. This item has seen better days and " +
      "should be disposed of at a Lane County transfer station.",
  },
  {
    label: "Free Recycle",
    value:
      "No, we cannot accept this item for reuse. This item has seen better days and " +
      "should be disposed of at a Lane County transfer station.",
  },
  {
    label: "Paid Recycle",
    value:
      "No, we cannot accept this item for reuse. This item has seen better days and " +
      "should be disposed of at a Lane County transfer station.",
  },
  {
    label: "Custom",
    value:
      "",
  },
];

module.exports = { YES_RESPONSES, NO_RESPONSES, MAYBE_RESPONSES };
