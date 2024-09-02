import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { Link } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'

import iconfooter from '@/assets/icon-footer.png'

export default function Footer() {
  return (
    <>
      <div className="hidden md:flex bg-slate-100 w-full flex-col">
        <div className="flex justify-between mx-32 py-20 flex-1 px-8">
          <div className="flex flex-col flex-1 items-start max-w-40">
            <h1 className="text-lime-700 font-semibold">Home</h1>
            <Link to="/" className="[&.active]">
              <p className="text-slate-600">My favorites</p>
            </Link>
            <Link to="/" className="[&.active]">
              <p className="text-slate-600">Recents</p>
            </Link>
          </div>
          <div className="flex flex-col flex-1 items-start max-w-40">
            <h1 className="font-semibold">Explore</h1>
            <Link to="/" className="[&.active]">
              <p className="text-slate-600">Lists</p>
            </Link>
            <Link to="/" className="[&.active]">
              <p className="flex text-slate-600">
                Maps <Badge variant="success">New</Badge>
              </p>
            </Link>
          </div>
          <div className="flex flex-col flex-1 items-start max-w-40">
            <h1 className="font-semibold">Campaigns</h1>

            <p className="text-slate-600 ">Home</p>
            <Link to="/" className="[&.active]">
              <p className="flex text-slate-600">
                Campaigns <Badge variant="success">12</Badge>
              </p>
            </Link>
            <Link to="/" className="[&.active]">
              {' '}
              <p className="flex text-slate-600">
                Donations <Badge variant="success">4</Badge>
              </p>
            </Link>
            <Link to="/" className="[&.active]">
              {' '}
              <p className="text-slate-600">Analytics</p>
            </Link>
          </div>
          <div className="flex flex-col flex-1 items-start max-w-40">
            <h1 className="font-semibold">Profile</h1>
            <Link to="/" className="[&.active]">
              <p className="text-slate-600">Settings</p>
            </Link>
            <Link to="/" className="[&.active]">
              <p className="flex text-slate-600">
                Notifications <Badge variant="success">10</Badge>
              </p>
            </Link>
          </div>
          <div className="flex flex-col flex-1 items-start max-w-40">
            <h1 className="font-semibold">Resources</h1>
            <Link to="/" className="[&.active]">
              <p className="text-slate-600">How to use crouwdfy</p>
            </Link>
            <Link to="/" className="[&.active]">
              <p className="text-slate-600">Docs</p>
            </Link>
            <Link to="/" className="[&.active]">
              <p className="text-slate-600">Legal Terms</p>
            </Link>
            <Link to="/" className="[&.active]">
              <p className="text-slate-600">Blog</p>
            </Link>
            <Link to="/" className="[&.active]">
              <p className="text-slate-600">Merch</p>
            </Link>
          </div>
        </div>
        <hr />
        <div className="flex mx-20 py-5 items-center justify-between">
          <div className="flex gap-x-2">
            <img src={iconfooter} alt="" />
            <p className="font-bold text-lg">Crowdfy</p>
          </div>
          <div className="flex">
            <p className="flex flex-wrap text-[#667085]">
              © 2077 Mainnet Design. All rights reserved.
            </p>
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
              <Link to="/" className="[&.active]">
                My favorites
              </Link>
            </AccordionContent>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              <Link to="/" className="[&.active]">
                Recents
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className=" text-foreground">
              Explore
            </AccordionTrigger>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              <Link to="/" className="[&.active]">
                Lists
              </Link>
            </AccordionContent>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              <Link to="/" className="[&.active]">
                Maps <Badge variant="success">New</Badge>
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className=" text-foreground">
              Campaigns
            </AccordionTrigger>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              <Link to="/" className="[&.active]">
                {' '}
                Home
              </Link>
            </AccordionContent>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              <Link to="/" className="[&.active]">
                {' '}
                Campaigns<Badge variant="success">12</Badge>
              </Link>
            </AccordionContent>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              <Link to="/" className="[&.active]">
                Donations<Badge variant="success">4</Badge>
              </Link>
            </AccordionContent>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              <Link to="/" className="[&.active]">
                Analytics
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className=" text-foreground">
              Profile
            </AccordionTrigger>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              <Link to="/" className="[&.active]">
                Settings
              </Link>
            </AccordionContent>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              <Link to="/" className="[&.active]">
                Notifications<Badge variant="success">10</Badge>
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className=" text-foreground">
              Resources
            </AccordionTrigger>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              <Link to="/" className="[&.active]">
                How to use crouwdfy
              </Link>
            </AccordionContent>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              <Link to="/" className="[&.active]">
                Docs
              </Link>
            </AccordionContent>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              <Link to="/" className="[&.active]">
                Legal Terms
              </Link>
            </AccordionContent>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              <Link to="/" className="[&.active]">
                Blog
              </Link>
            </AccordionContent>
            <AccordionContent className="bg-muted text-muted-foreground p-4">
              <Link to="/" className="[&.active]">
                {' '}
                Merch
              </Link>
            </AccordionContent>
          </AccordionItem>
          <hr />
          <div className="flex mx-4 py-5 items-center justify-between">
            <div className="flex gap-x-2">
              <img src={iconfooter} alt="" />
              <p className="font-bold text-lg">Crowdfy</p>
            </div>
            <div className="flex">
              <p className="flex flex-wrap text-[#667085] font-light">
                © 2077 Mainnet Design.
                <br /> All rights reserved.
              </p>
            </div>
          </div>
        </Accordion>
      </div>
    </>
  )
}
