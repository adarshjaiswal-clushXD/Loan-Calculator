from flask import Flask, render_template, request
import math

app = Flask(__name__)



@app.route("/", methods=["GET", "POST"])
def home():
    result = None
    selected_type = None
    banks = []
    tips = [
        "Always compare loan offers before applying.",
        "Pay EMIs on time to maintain a good credit score.",
        "Keep emergency funds for at least 6 months.",
        "Invest regularly to build wealth over time."
    ]

    if request.method == "POST":
        try:
            principal = float(request.form["principal"])
            rate = float(request.form["rate"])
            years = float(request.form["years"])
            selected_type = request.form["loan_type"]

            monthly_rate = rate / (12 * 100)
            months = years * 12
            emi = (principal * monthly_rate * math.pow(1 + monthly_rate, months)) / (math.pow(1 + monthly_rate, months) - 1)
            total_payment = emi * months
            total_interest = total_payment - principal

            # example best banks
            best_banks = {
                "Home Loan": ["HDFC", "SBI", "ICICI"],
                "Car Loan": ["Axis Bank", "ICICI Bank", "IDFC First"],
                "Personal Loan": ["HDFC Bank", "Kotak", "Bajaj Finance"],
                "Education Loan": ["SBI", "Bank of Baroda", "Punjab National Bank"]
            }

            banks = best_banks.get(selected_type, [])
            result = {
                "emi": round(emi, 2),
                "total_interest": round(total_interest, 2),
                "total_payment": round(total_payment, 2)
            }

        except Exception as e:
            result = {"error": str(e)}

    return render_template("index.html", result=result, selected_type=selected_type, banks=banks, tips=tips)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
