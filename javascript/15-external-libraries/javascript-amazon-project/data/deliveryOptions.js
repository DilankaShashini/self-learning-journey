import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}, {
  id: '2',
  deliveryDays: 3,
  priceCents: 499
}, {
  id: '3',
  deliveryDays: 1,
  priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  return deliveryOption || deliveryOptions[0];
}

// 15f helper function to check weekends
function isWeekend(date) {
  const dayOfWeek = date.format('dddd');
  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}

// 15l, 15m: Calculate delivery date while skipping Saturdays and Sundays using a while loop
export function calculateDeliveryDate(deliveryOption) {
  let remainingDays = deliveryOption.deliveryDays;
  let deliveryDate = dayjs();

  while (remainingDays > 0) {
    deliveryDate = deliveryDate.add(1, 'day');

    // If it is not a weekend, decrement remaining delivery days
    if (!isWeekend(deliveryDate)) {
      remainingDays--;
    }
  }

  const dateString = deliveryDate.format('dddd, MMMM D');
  return dateString;
}