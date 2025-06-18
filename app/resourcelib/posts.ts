export const blogPosts = [
  {
    slug: "fixed-vs-adjustable",
    title: "Understanding Fixed vs. Adjustable Rate Mortgages",
    content: `
<h2 class="text-3xl font-semibold mt-8 mb-6">Fixed-Rate Mortgages</h2>
<p class="mb-6 leading-relaxed">Fixed-rate mortgages lock in your interest rate for the entire loan term, usually 15 or 30 years. This provides predictable monthly payments, making budgeting easier.</p>

<img src="/images/fixed-rate-chart.png" alt="Fixed Rate Mortgage Chart" class="w-full max-w-4xl my-6 rounded-md shadow-md" />

<h2 class="text-3xl font-semibold mt-12 mb-6">Adjustable-Rate Mortgages (ARMs)</h2>
<p class="mb-6 leading-relaxed">ARMs typically start with a lower initial interest rate that adjusts periodically based on market indexes after a fixed period, such as 5 or 7 years.</p>

<div class="border-l-4 border-orange-500 bg-orange-50 p-4 my-6 max-w-4xl rounded-md shadow-sm font-normal">
  <strong>Tip:</strong> Consider an ARM if you plan to sell or refinance before the adjustable period begins.
</div>

<h3 class="text-xl font-semibold mt-10 mb-4">Pros and Cons</h3>
<ul class="list-disc list-inside mb-6 leading-relaxed">
  <li><strong>Fixed:</strong> Stability, easier to plan finances, protection against rising rates.</li>
  <li><strong>ARM:</strong> Lower initial payments, risk of rate increases, potential savings if rates drop.</li>
</ul>

<h3 class="text-xl font-semibold mt-10 mb-4">Learn More</h3>
<p class="mb-8 leading-relaxed">Check out this <a href="https://www.consumerfinance.gov/owning-a-home/mortgages/fixed-vs-adjustable-rate/" target="_blank" rel="noopener noreferrer" class="text-orange-600 hover:underline font-medium">CFPB guide on Fixed vs. Adjustable Rate Mortgages</a>.</p>
`,
  },

  {
    slug: "first-time-buyer-tips",
    title: "First-Time Homebuyer Mortgage Tips",
    content: `
<h2 class="text-3xl font-semibold mt-8 mb-6">Start with Your Credit Score</h2>
<p class="mb-6 leading-relaxed">Your credit score significantly affects your mortgage approval and interest rate. Aim to improve your score by paying down debts and avoiding new credit inquiries.</p>

<!-- Updated yellow light bulb icon with tip text -->
<div class="flex items-center space-x-4 my-6 max-w-4xl p-4 bg-orange-50 border-l-4 border-orange-500 rounded-md shadow-sm font-normal">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 21h6v-1H9v1zm3-20a6 6 0 00-6 6c0 2.21 1.19 4.15 3 5.19V15a1 1 0 002 0v-2.81c1.81-1.04 3-2.98 3-5.19a6 6 0 00-6-6zM7 9a5 5 0 0110 0c0 1.67-1 3.11-2.5 3.88V14h-5v-1.12A4.993 4.993 0 017 9z"/>
  </svg>
  <strong>Quick Tip:</strong> Check your credit report early and fix any errors before applying.
</div>

<h2 class="text-3xl font-semibold mt-12 mb-6">Save for a Down Payment</h2>
<p class="mb-6 leading-relaxed">Down payments usually range from 3% to 20% of the home's price. Larger down payments may help you secure better rates and avoid private mortgage insurance (PMI).</p>

<h3 class="text-xl font-semibold mt-10 mb-4">Explore Assistance Programs</h3>
<p class="mb-6 leading-relaxed">Many states and cities offer first-time buyer grants and assistance. Visit <a href="https://www.hud.gov/topics/buying_a_home" target="_blank" rel="noopener noreferrer" class="text-orange-600 hover:underline font-medium">HUD's Buying a Home page</a> for programs near you.</p>

<h2 class="text-3xl font-semibold mt-12 mb-6">Get Pre-Approved</h2>
<p class="mb-6 leading-relaxed">Pre-approval gives you a clearer budget and shows sellers you're a serious buyer.</p>

<div class="border-l-4 border-orange-500 bg-orange-50 p-4 my-6 max-w-4xl rounded-md shadow-sm font-normal">
  <strong>Suggestion:</strong> Shop around lenders for pre-approval to compare terms and rates.
</div>
`,
  },

  {
    slug: "mortgage-payment-breakdown",
    title: "What’s Included in a Mortgage Payment?",
    content: `
<h2 class="text-3xl font-semibold mt-8 mb-6">Principal and Interest</h2>
<p class="mb-6 leading-relaxed">The principal is the amount you borrowed, and interest is the lender's charge. Your monthly payment covers both.</p>

<table class="w-full max-w-4xl mx-auto my-6 border border-gray-300 rounded-md shadow-md text-left">
  <thead class="bg-orange-50 border-b border-orange-300">
    <tr>
      <th class="py-3 px-4 font-semibold text-orange-700">Component</th>
      <th class="py-3 px-4 font-semibold text-orange-700">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-gray-200">
      <td class="py-3 px-4 font-medium">Principal &amp; Interest</td>
      <td class="py-3 px-4">The amount borrowed plus the lender's interest charge; this is the core part of your monthly payment.</td>
    </tr>
    <tr class="border-b border-gray-200 bg-orange-50">
      <td class="py-3 px-4 font-medium">Property Taxes</td>
      <td class="py-3 px-4">Local taxes paid annually, often collected monthly via escrow.</td>
    </tr>
    <tr class="border-b border-gray-200">
      <td class="py-3 px-4 font-medium">Homeowners Insurance</td>
      <td class="py-3 px-4">Protects your home and belongings from damage or theft.</td>
    </tr>
    <tr class="bg-orange-50">
      <td class="py-3 px-4 font-medium">Private Mortgage Insurance (PMI)</td>
      <td class="py-3 px-4">Required if your down payment is less than 20%; protects the lender.</td>
    </tr>
  </tbody>
</table>

<h2 class="text-3xl font-semibold mt-12 mb-6">Property Taxes</h2>
<p class="mb-6 leading-relaxed">These are local taxes paid annually, often included in your monthly payment held in escrow.</p>

<h2 class="text-3xl font-semibold mt-12 mb-6">Homeowners Insurance</h2>
<p class="mb-6 leading-relaxed">This protects your home and belongings from damage or theft.</p>

<h2 class="text-3xl font-semibold mt-12 mb-6">Private Mortgage Insurance (PMI)</h2>
<p class="mb-6 leading-relaxed">If your down payment is less than 20%, you may pay PMI to protect the lender.</p>

<div class="border-l-4 border-orange-500 bg-orange-50 p-4 my-6 max-w-4xl rounded-md shadow-sm font-normal">
  <strong>Tip:</strong> Ask your lender if PMI can be removed once you build enough equity.
</div>

<h3 class="text-xl font-semibold mt-10 mb-4">Learn More</h3>
<p class="mb-8 leading-relaxed">Explore more about mortgage payments at <a href="https://www.investopedia.com/terms/m/mortgagepayment.asp" target="_blank" rel="noopener noreferrer" class="text-orange-600 hover:underline font-medium">Investopedia</a>.</p>
`,
  },

  {
    slug: "credit-score-impact",
    title: "How Credit Score Affects Your Mortgage Rate",
    content: `
<h2 class="text-3xl font-semibold mt-8 mb-6">Why Credit Score Matters</h2>
<p class="mb-6 leading-relaxed">Lenders use your credit score to assess risk. Higher scores typically qualify for lower interest rates, saving you money over the loan term.</p>

<img src="/images/credit-score-impact-chart.png" alt="Credit Score Impact on Rates" class="w-full max-w-4xl my-6 rounded-md shadow-md" />

<h2 class="text-3xl font-semibold mt-12 mb-6">Improving Your Score</h2>
<ul class="list-disc list-inside mb-6 leading-relaxed">
  <li>Pay bills on time</li>
  <li>Keep credit card balances low</li>
  <li>Avoid opening new accounts before applying</li>
</ul>

<div class="border-l-4 border-orange-500 bg-orange-50 p-4 my-6 max-w-6xl rounded-md shadow-sm font-normal">
  <strong>Tip:</strong> Even a 20-point increase in your credit score can significantly lower your mortgage rate.
</div>

<h2 class="text-3xl font-semibold mt-12 mb-6">Check Your Credit Reports</h2>
<p class="mb-8 leading-relaxed">Obtain free reports annually from <a href="https://www.annualcreditreport.com" target="_blank" rel="noopener noreferrer" class="text-orange-600 hover:underline font-medium">AnnualCreditReport.com</a> to verify accuracy.</p>
`,
  },

  {
    slug: "preapproval-vs-prequalification",
    title: "Getting Pre-Approved vs. Pre-Qualified",
    content: `
<h2 class="text-3xl font-semibold mt-8 mb-6">What is Pre-Qualification?</h2>
<p class="mb-6 leading-relaxed">Pre-qualification is an informal estimate of how much you might be able to borrow based on self-reported information.</p>

<h2 class="text-3xl font-semibold mt-12 mb-6">What is Pre-Approval?</h2>
<p class="mb-6 leading-relaxed">Pre-approval involves a lender reviewing your financial documents and credit, providing a conditional commitment for a loan amount.</p>

<img src="/images/preapproval-vs-prequalification.png" alt="Preapproval vs Prequalification" class="w-full max-w-4xl my-6 rounded-md shadow-md" />

<div class="border-l-4 border-orange-500 bg-orange-50 p-4 my-6 max-w-4xl rounded-md shadow-sm font-normal">
  <strong>Why Pre-Approval Matters:</strong> It strengthens your offer and speeds up the closing process.
</div>

<h3 class="text-xl font-semibold mt-10 mb-4">Next Steps</h3>
<ul class="list-disc list-inside mb-6 leading-relaxed">
  <li>Gather financial documents (tax returns, pay stubs)</li>
  <li>Shop lenders for the best pre-approval terms</li>
  <li>Use your pre-approval letter when making offers</li>
</ul>

<h3 class="text-xl font-semibold mt-10 mb-4">Learn More</h3>
<p class="mb-8 leading-relaxed">Read this <a href="https://www.consumerfinance.gov/owning-a-home/loan-process/prequalification-vs-preapproval/" target="_blank" rel="noopener noreferrer" class="text-orange-600 hover:underline font-medium">Consumer Finance guide</a> on pre-approval and pre-qualification.</p>
`,
  },
];
