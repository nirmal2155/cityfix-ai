function generateComplaint() {
  let problem = document.getElementById("problem").value;

  if (problem.trim() === "") {
    alert("Please describe the issue first.");
    return;
  }

  // 🔮 Future Integration with Google Gemini API:
  // This text will be sent to Gemini AI for smart understanding,
  // classification of civic issue type, and automated department routing.

  let complaint = `Dear City Authority,

I would like to report the following civic issue: ${problem}.
This issue is affecting the public and needs attention.

Kindly take necessary action at the earliest.

Thank you.`;

  document.getElementById("output").innerText = complaint;
}
