import './App.css'

function App() {
 const showCompany = (name, revenue) => { 
   return (
    <div id={name} className="company">
      <p>{name} makes ${revenue} billion every year</p>
     </div>
  )
 }

 return (
  <div className="ex-space">
    <h4 className='ex-title'>Exercise 1</h4>
    <div className="exercise" id="ex-1">
    {companies.map(company => showCompany(company.name, company.revenue))}
    </div>
 </div>
 )
}



 let companies = [
 { name: "Tesla", revenue: 140 },
 { name: "Microsoft", revenue: 300 },
 { name: "Google", revenue: 600 }
]



export default App
