import FooterOverview from "@/components/footerOverview";

function CardsViews() {
  return (
    <div className="md:flex-col lg:flex-row flex flex-col justify-center sm:gap-6 gap-3">
      <FooterOverview titulo="Donations" valor="$1,280" link="View analytics" />
      <FooterOverview titulo="Signatures" valor="6,785" link="View report" />
      <FooterOverview titulo="Likes" valor="77" link="View report" />
      <FooterOverview titulo="Views" valor="13,767" link="View report" />
    </div>
  );
}

export default CardsViews;
