const apiURL = "http://localhost:8080";

export async function getInitialState() {
   try {
      const response = await fetch(`${apiURL}/getInitialState`);
      return await response.json();
   } catch (err) {
      console.log(err);
   }
}
