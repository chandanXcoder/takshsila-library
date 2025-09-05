// Plans
const PLANS = [
  {
    title: 'AC Open Hall – Monthly',
    price: 1800,
    includes: ['AC Hall Access', 'Unlimited Wi-Fi', 'RO Water & Washrooms']
  },
  {
    title: 'Personal Cabin – Monthly',
    price: 3000,
    includes: ['Private Cabin', 'Wi-Fi', 'Locker Included']
  },
  {
    title: 'Dark Room – Monthly',
    price: 1500,
    includes: ['Low-light Room', 'Wi-Fi (Lobby)', 'RO Water & Washrooms']
  }
];

// Render Pricing
const pricingContainer = document.getElementById('pricingCards');
PLANS.forEach(plan => {
  const card = document.createElement('div');
  card.className = 'price-card';
  card.innerHTML = `
    <h3>${plan.title}</h3>
    <p><strong>₹${plan.price}</strong> / month</p>
    <ul>${plan.includes.map(i => `<li>${i}</li>`).join('')}</ul>
    <button class="btn primary">Choose Plan</button>
  `;
  pricingContainer.appendChild(card);
});

// Footer Year
document.getElementById('year').textContent = new Date().getFullYear();
