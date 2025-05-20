<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>CSS Layout with JavaScript</title>
<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f5f7fa;
    color: #333;
    padding: 20px;
  }
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  .card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    width: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
  }
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
  }
  .card img {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 15px;
  }
  .card h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #2c3e50;
  }
  .card p {
    font-size: 1rem;
    line-height: 1.5;
    color: #666;
    text-align: center;
  }
  .card button {
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #3498db;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .card button:hover {
    background-color: #2980b9;
  }
  @media (max-width: 650px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
    .card {
      width: 90%;
    }
  }
</style>
</head>
<body>
  <div class="container">
    <div class="card">
      <img src="https://via.placeholder.com/300x180" alt="Example Image 1" />
      <h2>Card Title One</h2>
      <p>This card uses flexbox for layout, with spacing, shadows, and hover effects to create a clean design.</p>
      <button class="learn-more">Learn More</button>
    </div>
    <div class="card">
      <img src="https://via.placeholder.com/300x180" alt="Example Image 2" />
      <h2>Card Title Two</h2>
      <p>Responsive design ensures the cards stack vertically on smaller screens for better readability.</p>
      <button class="learn-more">Learn More</button>
    </div>
  </div>
  <script>
    const buttons = document.querySelectorAll('.learn-more');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        alert('Thanks for your interest! More content coming soon.');
      });
    });
  </script>
</body>
</html>
