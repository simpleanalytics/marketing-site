export const useBottomBanner = () => useState("showBottomBanner", () => false);

/**
 * Check if we're in the Black Friday period (3 weeks before to the Wednesday after Black Friday)
 * Black Friday is the 4th Friday of November (day after Thanksgiving)
 */
export const useIsBlackFridayPeriod = () => {
  const getBlackFridayDate = (year) => {
    // Find the 4th Thursday of November (Thanksgiving)
    const november = new Date(year, 10, 1); // Month 10 = November (0-indexed)
    const firstDay = november.getDay(); // 0 = Sunday, 4 = Thursday
    // Calculate days until first Thursday
    const daysUntilFirstThursday = firstDay === 4 ? 0 : (11 - firstDay) % 7;
    const firstThursday = new Date(year, 10, 1 + daysUntilFirstThursday);
    // 4th Thursday is 21 days after the first Thursday
    const thanksgiving = new Date(firstThursday);
    thanksgiving.setDate(firstThursday.getDate() + 21);
    // Black Friday is the day after Thanksgiving
    const blackFriday = new Date(thanksgiving);
    blackFriday.setDate(thanksgiving.getDate() + 1);
    return blackFriday;
  };

  const now = new Date();
  const currentYear = now.getFullYear();
  const blackFriday = getBlackFridayDate(currentYear);

  const startDate = new Date(blackFriday);
  startDate.setDate(blackFriday.getDate() - 21); // 3 weeks before

  const endDate = new Date(blackFriday);
  endDate.setDate(blackFriday.getDate() + 5); // Wednesday after

  // Check if we're in the period for this year's Black Friday
  if (now >= startDate && now <= endDate) return true;

  // If we're past this year's period, check next year's period
  const nextYearBlackFriday = getBlackFridayDate(currentYear + 1);
  const nextYearStartDate = new Date(nextYearBlackFriday);
  nextYearStartDate.setDate(nextYearBlackFriday.getDate() - 21);
  const nextYearEndDate = new Date(nextYearBlackFriday);
  nextYearEndDate.setDate(nextYearBlackFriday.getDate() + 5);

  return now >= nextYearStartDate && now <= nextYearEndDate;
};
