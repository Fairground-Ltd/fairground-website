// deploy.js
import fetch from 'node-fetch';

async function triggerDeploy() {
  console.log("Publishing to production...");

  try {
    const response = await fetch('http://13.42.53.172:4000/deploy', {
      method: 'POST',
    });

    console.log(`HTTP status: ${response.status} ${response.statusText}`);

    if (response.ok) {
      const text = await response.text();
      console.log('Deploy webhook triggered successfully!');
      console.log('Response from server:', text);
    } else {
      console.error('Failed to trigger deploy webhook');
      const text = await response.text();
      console.error('Response from server:', text);
    }
  } catch (error) {
    console.error('Error triggering deploy webhook:', error);
  }
}

triggerDeploy();
