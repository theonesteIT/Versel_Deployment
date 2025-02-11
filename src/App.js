import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div className="container mx-auto ">
        <div class=" box-border border-4 p-4 bg-blue-500">
        Box with padding and border included in size
    </div>
    <div class=" box-content border-4 p-4 bg-green-500">
        Box with size excluding padding and border
    </div>
        
    <b>Tailwind CSS block Class</b>

<div class="bg-green-200 p-4 w-100 space-y-4 inline">
    <span class=" block h-12 bg-green-500 rounded-lg">1</span>
    <span class="  inline sm:inline md:block h-12 bg-green-500 rounded-lg">2</span>
    <span class=" inline sm:inline md:block h-12 bg-green-500 rounded-lg">3</span>
</div>
<div class="bg-green-500 ">
<div class="bg-green-500 p-4">
  <table class="border border-gray-300 w-full text-left bg-white">
    <thead>
      <tr class="bg-gray-500">
        <th class="border border-gray-300 px-4 py-2">Number</th>
        <th class="border border-gray-300 px-4 py-2">Name</th>
        <th class="border border-gray-300 px-4 py-2">Age</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover:bg-gray-400">
        <td class="border border-gray-500 px-4 py-2">1</td>
        <td class="border border-gray-300 px-4 py-2">John Doe</td>
        <td class="border border-gray-300 px-4 py-2">25</td>
      </tr>
      <tr class="hover:bg-gray-100">
        <td class="border border-gray-300 px-4 py-2">2</td>
        <td class="border border-gray-300 px-4 py-2">Jane Smith</td>
        <td class="border border-gray-300 px-4 py-2">30</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="mx-10">
        <img class="float-right p-4" src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20190807114330/GFG115.png" alt=''/>
    
        <p class="text-justify">
            How many times were you frustrated while looking out
            for a good collection of programming/algorithm/interview
            questions? What did you expect and what did you get?
            This portal has been created to provide well written,
            well thought and well explained solutions for selected
            questions. An IIT Roorkee alumnus and founder of
            GeeksforGeeks. He loves to solve programming problems
            in most efficient ways. Apart from GeeksforGeeks, he
            has worked with DE Shaw and Co. as a software developer
            and JIIT Noida as an assistant professor.It is a good
            platform to learn programming. It is an educational
            website. Prepare for the Recruitment drive of product
            based companies like Microsoft, Amazon, Adobe etc with
            a free online placement preparation course.
        </p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 active:bg-blue-900 focus:outline-none focus:ring">
  Click Me
</button>

    </div>
</div>

    </div>
    

      </header>
    </div>
  );
}

export default App;
