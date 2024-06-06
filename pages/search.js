export default function Search() {
  return <div>Not Used</div>;
}

// export default function Search({ data, keyExists }) {
//   return (
//     <div className="text-stone-100 m-9">
//       <div className="text-4xl">Search Page</div>
//       <div>Your ID Number: {data.id}</div>
//       <div>Your unique title is: "{data.title}"</div>
//       <div>Key Exists: {keyExists ? "Yes" : "No"}</div>
//     </div>
//   );
// }

// export async function getStaticProps() {
//   // Determine the base URL depending on the environment
//   const baseUrl =
//     process.env.NODE_ENV === "production"
//       ? "https://www.urbanfootnotes.com" // Replace with your actual production API domain
//       : "http://localhost:3000";

//   // Fetch the data from the API route
//   const res = await fetch(`${baseUrl}/api/googleMapsPlatform`);
//   const { data, keyExists } = await res.json();

//   return {
//     props: {
//       data,
//       keyExists,
//     },
//   };
// }

// // export async function getStaticProps() {
// //   let url = "http://localhost:3000/api/googleMapsPlatform";

// //   if (process.env.NODE_ENV === "production") {
// //     url = "https://www.urbanfootnotes.com/api/googleMapsPlatform";
// //   }

// //   const res = await fetch(url);
// //   const { data, keyExists } = await res.json();

// //   return {
// //     props: {
// //       data,
// //       keyExists,
// //     },
// //   };
// // }

// // export async function getStaticProps() {
// //   let data, keyExists;

// //   let url = "http://localhost:3000/api/googleMapsPlatform";
// //   if (process.env.NODE_ENV === "production") {
// //     url = "https://www.urbanfootnotes.com/api/googleMapsPlatform";
// //   }

// //   if (process.env.BUILD_ENV === "local") {
// //     // Assume the local server is running, fetch the data
// //     const res = await fetch(
// //       "https://www.urbanfootnotes.com/api/googleMapsPlatform"
// //     );
// //     const result = await res.json();
// //     data = result.data;
// //     keyExists = result.keyExists;
// //   } else {
// //     // For build, use mock data or handle differently
// //     data = { id: 2, title: "live fetch is not happening" }; // Mocked data
// //     keyExists = false; // Assuming the key exists for the build
// //   }

// //   return {
// //     props: {
// //       data,
// //       keyExists,
// //     },
// //   };
// // }
