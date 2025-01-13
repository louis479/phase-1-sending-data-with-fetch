function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ name, email }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to save data');
      }
      return response.json();
    })
    .then((data) => {
      // Append the new ID to the DOM
      document.body.innerHTML += `<p>New ID: ${data.id}</p>`;
    })
    .catch((error) => {
      // Append the error message to the DOM
      document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    });
}

