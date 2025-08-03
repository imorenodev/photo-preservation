// Quote form functionality
window.handlePackageChange = function() {
    const select = document.getElementById("packageSelect");
    const value = select.value;
    const details = document.getElementById("packageDetails");
    const custom = document.getElementById("customOptions");
    const price = document.getElementById("totalPrice");
    const serviceRadios = document.querySelectorAll('input[name="service_type"]');
    const photoCountInput = document.getElementById("photoCount");
    const pricingDisclaimer = document.getElementById("pricingDisclaimer");

    details.innerHTML = '';
    price.textContent = "$0.00";

    if (value === "Custom") {
        details.style.display = "none";
        custom.style.display = "block";
        // Make custom fields required
        serviceRadios.forEach(radio => radio.required = true);
        photoCountInput.required = true;
        if (pricingDisclaimer) pricingDisclaimer.required = true;
    } else if (value) {
        custom.style.display = "none";
        details.style.display = "block";
        // Remove required from custom fields
        serviceRadios.forEach(radio => {
            radio.required = false;
            radio.checked = false;
        });
        photoCountInput.required = false;
        photoCountInput.value = '';
        if (pricingDisclaimer) {
            pricingDisclaimer.required = false;
            pricingDisclaimer.checked = false;
        }
        
        switch (value) {
            case "Starter Scan":
                details.innerHTML = "LIMITED TIME: 50 scanned photos + USB Drive. Perfect way to test our service. Price: $50";
                price.textContent = "$50.00";
                break;
            case "Memory Package":
                details.innerHTML = "Professional Pickup & Delivery Photo Scanning. Up to 5,000 Photos + USB Drive + Long-term Storage. Price: $199";
                price.textContent = "$199.00";
                break;
            case "Heirloom Package":
                details.innerHTML = "Professional In-Home or Pickup & Delivery Photo Scanning. Up to 10,000 Photos + Digital Frame + USB Drive + Long-term Storage. Price: $499";
                price.textContent = "$499.00";
                break;
        }
    } else {
        details.style.display = "none";
        custom.style.display = "none";
        // Remove required from custom fields
        serviceRadios.forEach(radio => {
            radio.required = false;
            radio.checked = false;
        });
        photoCountInput.required = false;
        photoCountInput.value = '';
        if (pricingDisclaimer) {
            pricingDisclaimer.required = false;
            pricingDisclaimer.checked = false;
        }
    }
};

window.calculateTotal = function() {
    const service = document.querySelector('input[name="service_type"]:checked');
    const photoCount = parseInt(document.getElementById("photoCount").value) || 0;
    const digitalFrame = document.querySelector('input[name="digital_frame"]').checked;
    const familyWebsite = document.querySelector('input[name="family_website"]').checked;

    let total = 0;
    let originalTotal = 0;

    if (service) {
        const rate = service.value === "in-home" ? 0.05 : 0.025;
        total += rate * photoCount;
        originalTotal = total;
    }

    if (digitalFrame) total += 200;
    if (familyWebsite) total += 200;

    // Check if minimum was applied
    let minimumApplied = false;
    if (total > 0 && total < 50) {
        minimumApplied = true;
        total = 50;
    }

    document.getElementById("totalPrice").textContent = `$${total.toFixed(2)}`;
    
    // Show/hide minimum notice
    const minimumNotice = document.getElementById("minimumNotice");
    if (minimumNotice) {
        if (minimumApplied) {
            const rate = service.value === "in-home" ? 0.05 : 0.025;
            minimumNotice.innerHTML = `<small style="color: #666; font-style: italic;">Note: ${photoCount} photos × $${rate.toFixed(3)} = $${originalTotal.toFixed(2)}, but $50 minimum applies.</small>`;
            minimumNotice.style.display = "block";
        } else {
            minimumNotice.style.display = "none";
        }
    }
};

window.toggleSubmitButton = function() {
    const checkbox = document.getElementById("contactConfirm");
    const submitButton = document.getElementById("submitButton");
    
    if (checkbox.checked) {
        submitButton.disabled = false;
        submitButton.style.opacity = "1";
        submitButton.style.cursor = "pointer";
    } else {
        submitButton.disabled = true;
        submitButton.style.opacity = "0.5";
        submitButton.style.cursor = "not-allowed";
    }
};

// Initialize quote form functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check for URL parameter to preselect package (for quote.html)
    const urlParams = new URLSearchParams(window.location.search);
    const packageParam = urlParams.get('package');
    
    if (packageParam === 'try') {
        const packageSelect = document.getElementById('packageSelect');
        if (packageSelect) {
            packageSelect.value = 'Starter Scan';
            handlePackageChange(); // Trigger the change event
        }
    }

    // Handle "Claim This Deal Now!" button click (for index.html special offer)
    const claimDealButton = document.getElementById('claimDealButton');
    if (claimDealButton) {
        claimDealButton.addEventListener('click', function() {
            // Small delay to allow scroll to complete
            setTimeout(function() {
                const packageSelect = document.getElementById('packageSelect');
                if (packageSelect) {
                    packageSelect.value = 'Starter Scan';
                    handlePackageChange(); // Trigger the change event
                }
            }, 500);
        });
    }

    // Handle package buttons in pricing section
    const packageButtons = document.querySelectorAll('.package-button');
    packageButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const packageName = this.getAttribute('data-package');
            // Small delay to allow scroll to complete
            setTimeout(function() {
                const packageSelect = document.getElementById('packageSelect');
                if (packageSelect && packageName) {
                    packageSelect.value = packageName;
                    handlePackageChange(); // Trigger the change event
                }
            }, 500);
        });
    });

    // Handle custom quote button
    const customQuoteButton = document.querySelector('.custom-quote-button');
    if (customQuoteButton) {
        customQuoteButton.addEventListener('click', function() {
            // Small delay to allow scroll to complete
            setTimeout(function() {
                const packageSelect = document.getElementById('packageSelect');
                if (packageSelect) {
                    packageSelect.value = 'Custom';
                    handlePackageChange(); // Trigger the change event
                }
            }, 500);
        });
    }
});