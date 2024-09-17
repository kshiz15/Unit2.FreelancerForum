const freelancers = [
  { name: "Brandon", price: 25, occupation: "Artist" },
  { name: "Joe", price: 30, occupation: "programmer" },
  { name: "Frank", price: 50, occupation: "teacher" },
  { name: "Art", price: 57, occupation: "teacher" },
  { name: "Bob", price: 55, occupation: "teacher" },
  { name: "Kristen", price: 78, occupation: "programmer" },
  { name: "Kelly", price: 90, occupation: "teacher" },
  { name: "Kasey", price: 34, occupation: "driver" },
];

const NAMES = [
  "Granny",
  "Brett",
  "Andy",
  "Peter",
  "Greg",
  "Lane",
  "Chucky",
  "Hank",
];

const OCCUPATION = [
  "painter",
  "gardner",
  "teacher",
  "programmer",
  "florist",
  "teacher",
  "programmer",
];

const MAX_FREELANCERS = 20;

function addFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const price = 1 + Math.floor(Math.random() * 100);
  freelancers.push({ name, occupation, price });
}

function updateAveragePrice(state) {
    const total = freelancers.reduce(
      (acc, freelancer) => acc + freelancer.price,
      0
    );
    averagePrice = total / freelancers.length;
  }

  function renderFreelancers() {
    const $freelancers = freelancers.map((freelancer) => {
      const $tr = document.createElement("tr");
  
      $tr.innerHTML = `
      <td>${freelancer.name}</td>
      <td>${freelancer.occupation}</td>
      <td>$${freelancer.price}</td>
      `;
