
const content = [
    {
        title: "Stylish bouquets by florists",
        statement: "At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.",
    },
    {
        title: "On-time delivery",
        statement: "Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.",
    },
    {
        title: "Safe payment",
        statement: "You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.",
    },
    {
        title: "Subscription by your needs",
        statement: "With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs."
    }

]

function WhyChoose() {
    return (
      <section className="flex flex-col md:flex-row max-w-[1440px] mx-auto">
        {/* Left Section */}
        <h1 className="py-10 sm:py-20 px-4 sm:px-20 border-b-1 md:border-r-1 border-t-0 font-semibold text-[34px] sm:text-[50px] leading-[120%] w-full md:w-1/2">
          Why choose us?
        </h1>
  
        {/* Right Section */}
        <div className="w-full md:w-1/2">
          {content.map((content, index) => (
            <div
              key={index}
              className="py-10 px-4 sm:px-20 border-1 border-t-0 border-l-0 w-full"
            >
              <h3 className="font-[Gilroy] font-medium text-[26px] sm:text-[38px] leading-[120%] pb-4">
                {content.title}
              </h3>
              <p className="font-[Gilroy] font-normal text-[16px] leading-[140%]">
                {content.statement}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  

export default WhyChoose
