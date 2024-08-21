import FooterOverview from "@/componentes/footerOverview";

function CardsViews() {
  return (
    <div className="flex flex-wrap justify-center space-y-8 sm:space-y-0 sm:space-x-8">
      <FooterOverview titulo="Donations" valor="$1,280" link="View analytics" />
      <FooterOverview titulo="Signatures" valor="6,785" link="View report" />
      <FooterOverview titulo="Likes" valor="77" link="View report" />
      <FooterOverview titulo="Views" valor="13,767" link="View report" />
    </div>
  );
}

export default CardsViews;
