import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Footer() {
  return (
    <>
      <div className="bg-slate-900   md:hidden flex flex-wrap">
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>

        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>

        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
      </div>
      <div className="flex bg-black flex-wrap justify-around h-auto  ">
        <div className=" bg-transparent text-white h-20 flex items-center justify-center p-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Home</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className=" bg-transparent text-white h-20 flex items-center justify-center p-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-2">
              <AccordionTrigger>Explore</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className=" bg-transparent text-white h-20 flex items-center justify-center p-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-3">
              <AccordionTrigger>Campaigns</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className=" bg-transparent text-white h-20 flex items-center justify-center p-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-4">
              <AccordionTrigger>Profile</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className=" bg-transparent text-white h-20 flex items-center justify-center p-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-5">
              <AccordionTrigger>Resources</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
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
