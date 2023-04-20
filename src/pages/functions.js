function isTouchingLimits(erlen, limit1, limit2) {
  let erlenRect, limit1Rect, limit2Rect, isTouchingLimit1, isTouchingLimit2;
  if (erlen) {
    erlenRect = erlen.getBoundingClientRect();
  }
  if (limit1) {
    limit1Rect = limit1.getBoundingClientRect();
  }
  if (limit2) {
    limit2Rect = limit2.getBoundingClientRect();
  }
  if (erlenRect && limit1Rect) {
    isTouchingLimit1 =
      erlenRect.right >= limit1Rect.left &&
      erlenRect.left <= limit1Rect.right &&
      erlenRect.bottom >= limit1Rect.top &&
      erlenRect.top <= limit1Rect.bottom;
  }
  if (erlenRect && limit2Rect) {
    isTouchingLimit2 =
      erlenRect.right >= limit2Rect.left &&
      erlenRect.left <= limit2Rect.right &&
      erlenRect.bottom >= limit2Rect.top &&
      erlenRect.top <= limit2Rect.bottom;
  }

  if (isTouchingLimit1) {
    return 1;
  } else if (isTouchingLimit2) {
    return 2;
  } else {
    return 0;
  }
}
export default isTouchingLimits;
