import Button from "../ui/Button"

export default function Appbar () {
return <div className="flex flex-row justify-between gap-48 mb-8">
     <div className="text-xl hover:text-blue-500 cursor-pointer">Home</div>
     <div className="text-xl hover:text-blue-500 cursor-pointer">FAQ</div>
     <div className="text-xl hover:text-blue-500 cursor-pointer">Docs</div>
     <Button onClick={()=>{
        alert("implement soon")
     }}>Sign In</Button>
</div>
}