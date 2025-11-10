let bankRates = [
  { name: "State Bank of India", rate: 9.15 },
  { name: "HDFC Bank", rate: 9.25 },
  { name: "ICICI Bank", rate: 9.10 },
  { name: "Axis Bank", rate: 9.20 },
  { name: "Punjab National Bank", rate: 9.00 },
  { name: "Bank of Baroda", rate: 9.05 },
  { name: "Kotak Mahindra Bank", rate: 9.30 },
  { name: "Union Bank of India", rate: 9.00 },
  { name: "Canara Bank", rate: 8.95 },
  { name: "Yes Bank", rate: 9.35 },
  { name: "IDFC First Bank", rate: 9.45 },
  { name: "IndusInd Bank", rate: 9.50 },
  { name: "Federal Bank", rate: 9.40 },
  { name: "Central Bank of India", rate: 9.05 },
  { name: "UCO Bank", rate: 9.10 },
  { name: "RBL Bank", rate: 9.60 },
];

function displayBanks(list) {
  const bankList = document.getElementById("bankList");
  bankList.innerHTML = "";
  list.slice(0, 10).forEach(bank => {
    const li = document.createElement("li");
    li.textContent = `${bank.name}: ${bank.rate}%`;
    bankList.appendChild(li);
  });
}

displayBanks(bankRates);

document.getElementById("bankSearch").addEventListener("input", e => {
  const query = e.target.value.toLowerCase();
  const filtered = bankRates.filter(b => b.name.toLowerCase().includes(query));
  displayBanks(filtered);
});

document.getElementById("refreshRates").addEventListener("click", () => {
  alert("✅ Bank rates refreshed!");
  displayBanks(bankRates);
  document.getElementById("lastUpdated").textContent = "Last Updated: " + new Date().toLocaleString();
});
// --- Bank Rate Data (Backend Simulation) ---
let bankRates = [
  { name: "State Bank of India", rate: 9.15 },
  { name: "HDFC Bank", rate: 9.25 },
  { name: "ICICI Bank", rate: 9.10 },
  { name: "Axis Bank", rate: 9.20 },
  { name: "Punjab National Bank", rate: 9.00 },
  { name: "Bank of Baroda", rate: 9.05 },
  { name: "Kotak Mahindra Bank", rate: 9.30 },
  { name: "Union Bank of India", rate: 9.00 },
  { name: "Canara Bank", rate: 8.95 },
  { name: "Yes Bank", rate: 9.35 },
  { name: "IDFC First Bank", rate: 9.45 },
  { name: "IndusInd Bank", rate: 9.50 },
  { name: "Federal Bank", rate: 9.40 },
  { name: "Central Bank of India", rate: 9.05 },
  { name: "UCO Bank", rate: 9.10 },
  { name: "South Indian Bank", rate: 9.30 },
  { name: "Bank of India", rate: 9.20 },
  { name: "RBL Bank", rate: 9.60 },
  { name: "Indian Bank", rate: 9.00 },
  { name: "IDBI Bank", rate: 9.15 },
  // ... Add up to 50 banks easily
];

// --- Show Top 10 Banks ---
function displayBanks(list) {
  const bankList = document.getElementById("bankList");
  bankList.innerHTML = "";
  list.slice(0, 10).forEach(bank => {
    const li = document.createElement("li");
    li.textContent = `${bank.name}: ${bank.rate}%`;
    bankList.appendChild(li);
  });
}

displayBanks(bankRates);

// --- Search Function ---
document.getElementById("bankSearch").addEventListener("input", e => {
  const query = e.target.value.toLowerCase();
  const filtered = bankRates.filter(b => b.name.toLowerCase().includes(query));
  displayBanks(filtered);
});

// --- Refresh Button ---
document.getElementById("refreshRates").addEventListener("click", () => {
  alert("🔄 Rates updated from live data!");
  displayBanks(bankRates);
});

// --- Loan Calculation ---
document.getElementById("calculate").addEventListener("click", () => {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value) / 100 / 12;
  const time = parseFloat(document.getElementById("time").value) * 12;

  const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
  const totalAmount = emi * time;
  const totalInterest = totalAmount - principal;

  document.getElementById("emi").textContent = `Monthly EMI: ₹${emi.toFixed(2)}`;
  document.getElementById("totalInterest").textContent = `Total Interest: ₹${totalInterest.toFixed(2)}`;
  document.getElementById("totalAmount").textContent = `Total Payment: ₹${totalAmount.toFixed(2)}`;
});

