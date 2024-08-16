import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from './badge'

import iconfooter from '@/assets/icon-footer.png'

export default function Footer() {
  return (
    <>
      <div className="hidden md:flex bg-slate-100 w-full flex-col">
        <div className="flex justify-center gap-x-16 py-4 flex-1 px-8">
          <div className="flex flex-col flex-1 items-start max-w-40">
            <h1>Home</h1>

            <p>My favorites</p>
            <p>Recents</p>
          </div>
          <div className="flex flex-col flex-1 items-start max-w-40">
            <h1>Explore</h1>

            <p>Lists</p>
            <p className='flex'>Maps <Badge variant="success">New</Badge></p>
          </div>
          <div className="flex flex-col flex-1 items-start max-w-40">
            <h1>Campaigns</h1>

            <p>Home</p>
            <p className='flex'>Campaigns <Badge variant="success">12</Badge></p>
            <p className='flex'>Donations <Badge variant="success">4</Badge></p>
            <p>Analytics</p>
          </div>
          <div className="flex flex-col flex-1 items-start max-w-40">
            <h1>Profile</h1>

            <p>Settings</p>
            <p className='flex'>Notifications <Badge variant="success">10</Badge></p>
          </div>
          <div className="flex flex-col flex-1 items-start max-w-40">
            <h1>Resources</h1>

            <p>How to use crouwdfy</p>
            <p>Docs</p>
            <p>Legal Terms</p>
            <p>Blog</p>
            <p>Merch</p>
          </div>
        </div>
        <div className="flex ml-3 py-5">
            <div className="flex gap-x-2">
              <img src={iconfooter} alt="" />
              <p className="size-4 font-bold">Crowdfy</p>
            </div>
          </div>
        
      </div>
      

      <div className=" md:hidden flex flex-wrap bg-slate-100">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className=" text-foreground text-lime-700">
              Home
            </AccordionTrigger>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              My favorites
            </AccordionContent>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              Recents
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className=" text-foreground">
              Explore
            </AccordionTrigger>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              Lists
            </AccordionContent>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              Maps <Badge variant="success">New</Badge>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className=" text-foreground">
              Campaigns
            </AccordionTrigger>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              Home
            </AccordionContent>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              Campaigns<Badge variant="success">12</Badge>
            </AccordionContent>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              Donations<Badge variant="success">4</Badge>
            </AccordionContent>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              Analytics
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className=" text-foreground">
              Profile
            </AccordionTrigger>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              Settings
            </AccordionContent>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              Notifications<Badge variant="success">10</Badge>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className=" text-foreground">
              Resources
            </AccordionTrigger>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              How to use crouwdfy
            </AccordionContent>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              Docs
            </AccordionContent>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              Legal Terms
            </AccordionContent>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              Blog
            </AccordionContent>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              Merch
            </AccordionContent>
          </AccordionItem>
          <div className="flex ml-3  py-5 items-center justify-between">
            <div className="flex gap-x-2">
              <img src={iconfooter} alt="" />
              <p className="font-bold text-lg">Crowdfy</p>
            </div>
            <div className='flex'>
              <p className='flex flex-wrap'>© 2077 Mainnet Design.<br /> All rights reserved.</p>
            </div>
          </div>
        </Accordion>
      </div>
    </>
  )
}

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from '@/components/ui/accordion'

// export default function Footer() {
//   const items = [
//     { value: 'item-1', label: 'Home' },
//     { value: 'item-2', label: 'Explore' },
//     { value: 'item-3', label: 'Campaigns' },
//     { value: 'item-4', label: 'Profile' },
//     { value: 'item-5', label: 'Resources' },
//   ]

//   return (
//     <>
//       {/* Layout visível em telas menores que 768px */}
//       <div className="bg-slate-900 md:hidden flex flex-wrap">
//         <div className="flex bg-black flex-wrap justify-around w-full">
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className="bg-transparent text-white h-20 flex items-center justify-center p-4 w-full md:w-1/5"
//             >
//               <Accordion type="single" collapsible className="w-full">
//                 <AccordionItem value={item.value}>
//                   <AccordionTrigger>{item.label}</AccordionTrigger>
//                   <AccordionContent>
//                     Yes. It adheres to the WAI-ARIA design pattern.
//                   </AccordionContent>
//                   <AccordionContent>
//                     Yes. It adheres to the WAI-ARIA design pattern.
//                   </AccordionContent>
//                 </AccordionItem>
//               </Accordion>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Layout visível em telas maiores que 768px */}
//       <div className="hidden md:flex bg-black flex-wrap justify-around w-full">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="bg-transparent text-white h-20 flex items-center justify-center p-4 w-full md:w-1/5"
//           >
//             <Accordion type="single" collapsible className="w-full">
//               <AccordionItem value={`item-${index + 6}`}>
//                 <AccordionTrigger>{item.label}</AccordionTrigger>
//                 <AccordionContent>
//                   Yes. It adheres to the WAI-ARIA design pattern.
//                 </AccordionContent>
//                 <AccordionContent>
//                   Yes. It adheres to the WAI-ARIA design pattern.
//                 </AccordionContent>
//               </AccordionItem>
//             </Accordion>
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }
