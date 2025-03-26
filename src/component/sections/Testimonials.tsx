import TestimonialCard from "../cards/TestimonialCard";

const Testimonials = () => {
  return (
    <div className="lg:py-[20vh] py-20 lg:w-[80vw] w-[90vw] mx-auto">
      <div className="flex flex-col text-center items-center justify-center space-y-2">
        <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#808080] py-1 px-3 rounded-full">
          Testimonials
        </h2>
        <p className="lg:text-[48px] text-[24px] font-semibold">What Our Users Are Saying</p>
        <p className="lg:text-[25px] text-[#333] lg:w-[80%]">
          Trusted for our insightful guidance and quality resources, we are the
          go-to support for tax professionals and organisations across the
          region.
        </p>
      </div>

      <div className="mt-10 lg:grid grid-cols-3 flex gap-10 flex-nowrap lg:overflow-x-hidden pb-10 overflow-x-auto">
        <TestimonialCard
          name="Anna W."
          location="Phoenix, AZ"
          testimonial=" &quot;We had a complex plumbing issue that several other companies couldn't
          fix. H&H plumbing diagnosed and resolved it quickly. We're extremely
          grateful for their expertise.&quot;"
        />
        <TestimonialCard
          name="Mark S."
          location="Chicago, IL"
          testimonial='"We had an emergency situation late at night, and H&H plumbing came to the rescue. They were prompt, courteous, and resolved the issue efficiently."'
        />
        <TestimonialCard
          name="Olivia G."
          location="Boston, MA"
          testimonial='"Outstanding service from start to finish. The team was professional, respectful of our home, and solved our plumbing issues efficiently. We highly recommend H&H plumbing!"'
        />
        <TestimonialCard
          name="Anna W."
          location="Phoenix, AZ"
          testimonial=" &quot;We had a complex plumbing issue that several other companies couldn't
          fix. H&H plumbing diagnosed and resolved it quickly. We're extremely
          grateful for their expertise.&quot;"
        />
        <TestimonialCard
          name="Mark S."
          location="Chicago, IL"
          testimonial='"We had an emergency situation late at night, and H&H plumbing came to the rescue. They were prompt, courteous, and resolved the issue efficiently."'
        />
        <TestimonialCard
          name="Olivia G."
          location="Boston, MA"
          testimonial='"Outstanding service from start to finish. The team was professional, respectful of our home, and solved our plumbing issues efficiently. We highly recommend H&H plumbing!"'
        />
        <TestimonialCard
          name="Anna W."
          location="Phoenix, AZ"
          testimonial=" &quot;We had a complex plumbing issue that several other companies couldn't
          fix. H&H plumbing diagnosed and resolved it quickly. We're extremely
          grateful for their expertise.&quot;"
        />
        <TestimonialCard
          name="Mark S."
          location="Chicago, IL"
          testimonial='"We had an emergency situation late at night, and H&H plumbing came to the rescue. They were prompt, courteous, and resolved the issue efficiently."'
        />
        <TestimonialCard
          name="Olivia G."
          location="Boston, MA"
          testimonial='"Outstanding service from start to finish. The team was professional, respectful of our home, and solved our plumbing issues efficiently. We highly recommend H&H plumbing!"'
        />
      </div>
    </div>
  );
};

export default Testimonials;
