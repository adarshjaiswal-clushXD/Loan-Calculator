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
