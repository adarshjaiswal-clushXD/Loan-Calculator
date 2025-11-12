let bankRates = [
  {
    name: "State Bank of India (SBI)",
    home: "7.00–8.60",
    car: "7.25–9.50",
    personal: "10.05–15.30",
    education: "6.75–9.00"
  },
  {
    name: "HDFC Bank",
    home: "7.90–9.50",
    car: "7.40–9.75",
    personal: "9.99–24.00",
    education: "8.00–11.00"
  },
  {
    name: "ICICI Bank",
    home: "7.50–9.50",
    car: "7.50–10.50",
    personal: "10.60–16.50",
    education: "8.00–12.00"
  },
  {
    name: "Axis Bank",
    home: "7.50–9.75",
    car: "7.75–11.00",
    personal: "9.90–22.00",
    education: "8.25–13.00"
  },
  {
    name: "Kotak Mahindra Bank",
    home: "7.25–9.25",
    car: "8.00–10.75",
    personal: "9.98–18.00",
    education: "8.00–13.00"
  },
  {
    name: "Bank of Baroda (BoB)",
    home: "7.10–9.25",
    car: "7.50–9.75",
    personal: "10.40–18.75",
    education: "7.75–11.50"
  },
  {
    name: "Punjab National Bank (PNB)",
    home: "7.25–9.25",
    car: "7.50–10.00",
    personal: "11.25–17.95",
    education: "8.00–12.00"
  },
  {
    name: "Union Bank of India",
    home: "7.40–9.25",
    car: "7.50–9.50",
    personal: "10.75–14.45",
    education: "8.00–11.50"
  },
  {
    name: "Canara Bank",
    home: "7.30–9.50",
    car: "7.50–9.75",
    personal: "10.45–15.90",
    education: "8.00–11.50"
  },
  {
    name: "IDBI Bank",
    home: "7.50–9.50",
    car: "7.75–10.25",
    personal: "11.00–15.50",
    education: "8.50–12.00"
  },
  {
    name: "IndusInd Bank",
    home: "7.90–9.75",
    car: "8.00–11.00",
    personal: "10.49–20.00",
    education: "8.50–13.00"
  },
  {
    name: "YES Bank",
    home: "7.90–9.75",
    car: "8.00–11.00",
    personal: "10.99–21.00",
    education: "8.50–13.50"
  },
  {
    name: "IDFC FIRST Bank",
    home: "7.50–9.25",
    car: "7.75–10.00",
    personal: "9.99–16.50",
    education: "8.00–12.00"
  },
  {
    name: "Indian Bank",
    home: "7.25–9.25",
    car: "7.50–9.50",
    personal: "9.90–16.00",
    education: "8.00–11.50"
  },
  {
    name: "Bank of India (BoI)",
    home: "7.25–9.25",
    car: "7.50–10.00",
    personal: "10.85–17.00",
    education: "8.00–12.00"
  },
  {
    name: "Central Bank of India",
    home: "7.50–9.75",
    car: "8.00–10.50",
    personal: "10.60–12.40",
    education: "8.25–11.50"
  },
  {
    name: "Bank of Maharashtra",
    home: "7.75–9.75",
    car: "8.00–10.50",
    personal: "9.50–14.30",
    education: "8.25–11.50"
  },
  {
    name: "Indian Overseas Bank (IOB)",
    home: "7.50–9.75",
    car: "8.00–10.50",
    personal: "10.50–13.00",
    education: "8.00–11.50"
  },
  {
    name: "City Union Bank",
    home: "8.00–10.00",
    car: "8.50–11.00",
    personal: "11.00–18.00",
    education: "9.00–13.00"
  },
  {
    name: "J&K Bank",
    home: "8.00–10.25",
    car: "8.25–10.75",
    personal: "12.25–13.25",
    education: "9.00–13.00"
  },
  {
    name: "RBL Bank",
    home: "8.25–10.50",
    car: "8.50–11.00",
    personal: "11.50–20.00",
    education: "9.00–14.00"
  },
  {
    name: "Federal Bank",
    home: "7.75–9.50",
    car: "8.00–10.50",
    personal: "11.49–14.49",
    education: "8.50–12.00"
  },
  {
    name: "South Indian Bank",
    home: "8.00–10.50",
    car: "8.50–11.50",
    personal: "13.10–20.60",
    education: "9.00–14.00"
  },
  {
    name: "Karur Vysya Bank",
    home: "8.00–10.25",
    car: "8.50–11.00",
    personal: "13.15–14.15",
    education: "9.00–13.00"
  },
  {
    name: "HSBC India",
    home: "7.75–9.25",
    car: "7.90–10.50",
    personal: "10.15–16.00",
    education: "8.50–12.50"
  },
  {
    name: "Tata Capital (NBFC)",
    home: "7.90–10.50",
    car: "8.50–13.00",
    personal: "11.99–24.00",
    education: "9.00–14.00"
  },
  {
    name: "Punjab & Sind Bank",
    home: "7.40–9.50",
    car: "7.75–10.00",
    personal: "10.35–13.40",
    education: "8.00–11.00"
  },
  {
    name: "UCO Bank",
    home: "7.50–9.75",
    car: "8.00–10.50",
    personal: "10.70–13.70",
    education: "8.25–11.50"
  },
  {
    name: "Bandhan Bank",
    home: "8.00–10.50",
    car: "12.15+",
    personal: "9.47–12.55",
    education: "9.00–13.00"
  },
  {
    name: "AU Small Finance Bank",
    home: "8.25–10.50",
    car: "8.50–11.50",
    personal: "11.00–20.00",
    education: "9.00–14.00"
  }
];

function displayBanks(list) {
  const bankList = document.getElementById("bankList");
  bankList.innerHTML = "";
  
  list.forEach(bank => {
    const li = document.createElement("li");
    li.className = "bank-item";
    
    // Bank header (clickable)
    const header = document.createElement("div");
    header.className = "bank-header";
    header.innerHTML = `
      <span class="bank-name">${bank.name}</span>
      <span class="toggle-icon">▼</span>
    `;
    
    // Bank details (collapsible)
    const details = document.createElement("div");
    details.className = "bank-details";
    details.innerHTML = `
      <div class="rate-item">
        <span class="rate-label">🏠 Home Loan:</span>
        <span class="rate-value">${bank.home}%</span>
      </div>
      <div class="rate-item">
        <span class="rate-label">🚗 Car Loan:</span>
        <span class="rate-value">${bank.car}%</span>
      </div>
      <div class="rate-item">
        <span class="rate-label">💼 Personal Loan:</span>
        <span class="rate-value">${bank.personal}%</span>
      </div>
      <div class="rate-item">
        <span class="rate-label">🎓 Education Loan:</span>
        <span class="rate-value">${bank.education}%</span>
      </div>
    `;
    
    // Toggle functionality
    header.addEventListener("click", () => {
      const isOpen = details.classList.toggle("open");
      header.querySelector(".toggle-icon").textContent = isOpen ? "▲" : "▼";
    });
    
    li.appendChild(header);
    li.appendChild(details);
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

// Set initial last updated time
document.getElementById("lastUpdated").textContent = "Last Updated: " + new Date().toLocaleString();
