import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from './badge'

export default function Footer() {
  return (
    <>
      {/* Layout visível em telas maiores que 768px */}
      <div className="hidden md:flex bg-gray-500 flex-wrap justify-around w-full">
        <div className="flex justify-around items-center">
          <div>
            <h1>HOME</h1>
          </div>
          <div>
            <h1>HOME</h1>
          </div>
          <div>
            <h1>HOME</h1>
          </div>
          <div>
            <h1>HOME</h1>
          </div>
          <div>
            <h1>HOME</h1>
          </div>
        </div>
      </div>

      <div className=" md:hidden flex flex-wrap bg-slate-100">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className=" text-foreground text-green-300">
              Home
            </AccordionTrigger>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              My favorites <Badge variant="success">Badge</Badge>
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
              Maps
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className=" text-foreground">
              How do I get started with the app?
            </AccordionTrigger>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              To get started, simply download the app from your device's app
              store and follow the on-screen instructions to set up your
              account. Once you've completed the registration process, you'll
              have full access to all the app's features and can start exploring
              its capabilities.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className=" text-foreground">
              Is the app secure?
            </AccordionTrigger>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              Absolutely. We take the security and privacy of our users very
              seriously. The app employs industry-leading encryption
              technologies and follows strict data protection protocols to
              ensure that your information is always safe and secure.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className=" text-foreground">
              How can I get support if I have any issues?
            </AccordionTrigger>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              If you encounter any issues or have questions about the app, our
              dedicated support team is available 24/7 to assist you. You can
              reach out to us through the in-app chat, email, or by calling our
              toll-free number. We're here to help you get the most out of your
              mobile experience.
            </AccordionContent>
          </AccordionItem>
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
