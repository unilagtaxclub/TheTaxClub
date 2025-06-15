import { useParams } from "react-router-dom";
import Container from "../../component/defaults/Container";
import Footer from "../../component/defaults/Footer";
import Header from "../../component/defaults/Header";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "../../component/svgs/Logos";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  console.log(slug);
  return (
    <Container>
      <div className="bg-[#f2f2f2] min-h-screen pt-10">
        <Header active="Blog" />
        <div className="w-[90vw] lg:w-[50vw] mx-auto mt-10 pb-10">
          <div className="space-y-4">
            <div className="flex">
              <p className="bg-[#4b6bfb] text-[#fff] text-[14px] py-1 px-3 rounded-lg">
                Technology
              </p>
            </div>
            <h2 className="lg:text-[36px] text-[18px] text-[#333] font-semibold">
              {slug}
            </h2>
            <div className="flex space-x-10 items-center text-[#808080] text-[14px]">
              <div className="flex items-center space-x-3">
                <img
                  src="/assets/blog-imgs/bl-avatar-2.png"
                  alt="author"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-[#333]">John Doe</span>
              </div>
              <p>22 October, 2022</p>
            </div>
          </div>
          <img
            src="/assets/blog.jpeg"
            alt="blog-img"
            className="my-10 lg:h-[462px] h-[296px] rounded-2xl w-[100%] object-cover"
          />
          <p className="lg:text-[20px]">
            Traveling is an enriching experience that opens up new horizons,
            exposes us to different cultures, and creates memories that last a
            lifetime. However, traveling can also be stressful and overwhelming,
            especially if you don't plan and prepare adequately. In this blog
            article, we'll explore tips and tricks for a memorable journey and
            how to make the most of your travels.
          </p>
          <p className="lg:text-[20px] mt-6">
            One of the most rewarding aspects of traveling is immersing yourself
            in the local culture and customs. This includes trying local
            cuisine, attending cultural events and festivals, and interacting
            with locals. Learning a few phrases in the local language can also
            go a long way in making connections and showing respect.
          </p>

          <div className="space-y-3 mt-4">
            <h2 className="lg:text-[24px] text-[20px] font-semibold">
              Research Your Destination
            </h2>

            <p className="lg:text-[20px]">
              Before embarking on your journey, take the time to research your
              destination. This includes understanding the local culture,
              customs, and laws, as well as identifying top attractions,
              restaurants, and accommodations. Doing so will help you navigate
              your destination with confidence and avoid any cultural faux pas.
            </p>
            <p className="pt-3 lg:text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
              ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
              euismod elementum nisi quis eleifend quam adipiscing vitae.
              Viverra adipiscing at in tellus.
            </p>
          </div>

          <div className="space-y-3 mt-4">
            <h2 className="lg:text-[24px] text-[20px] font-semibold">
              Plan your Itinerary
            </h2>

            <p className="lg:text-[20px]">
              While it's essential to leave room for spontaneity and unexpected
              adventures, having a rough itinerary can help you make the most of
              your time and budget. Identify the must-see sights and experiences
              and prioritize them according to your interests and preferences.
              This will help you avoid overscheduling and ensure that you have
              time to relax and enjoy your journey.
            </p>
            <p className="pt-3 lg:text-[20px]">
              Vitae sapien pellentesque habitant morbi tristique. Luctus
              venenatis lectus magna fringilla. Nec ullamcorper sit amet risus
              nullam eget felis. Tincidunt arcu non sodales neque sodales ut
              etiam sit amet.
            </p>
          </div>

          <div className="bg-[#fff] mt-10 rounded-2xl w-[100%] italic p-4 text-center">
            <h2 className="lg:text-[20px] font-mono">
              “ Traveling can expose you to new environments and potential
              health risks, so it's crucial to take precautions to stay safe and
              healthy. ”
            </h2>
          </div>
          <img
            src="/assets/blog.jpeg"
            alt="blog-img"
            className="my-10 lg:h-[462px] h-[296px] rounded-2xl w-[100%] object-cover"
          />
          <div className="bg-[#e8e8ea] text-center text-[#696A75] p-4 rounded-2xl">
            <p className="text-[14px]">Advertisement</p>
            <p className="text-[20px] font-semibold">You can place ads</p>
            <p className="text-[18px]">750x100</p>
          </div>

          <div className="space-y-6 mt-10">
            <div className="space-y-3">
              <h2 className="lg:text-[24px] text-[20px] font-semibold">
                Pack lightly and smartly
              </h2>
              <p className="lg:text-[20px]">
                Packing can be a daunting task, but with some careful planning
                and smart choices, you can pack light and efficiently. Start by
                making a packing list and sticking to it, focusing on versatile
                and comfortable clothing that can be mixed and matched. Invest
                in quality luggage and packing organizers to maximize space and
                minimize wrinkles.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="lg:text-[24px] text-[20px] font-semibold">
                Stay safe and Healthy
              </h2>
              <p className="lg:text-[20px]">
                Traveling can expose you to new environments and potential
                health risks, so it's crucial to take precautions to stay safe
                and healthy. This includes researching any required vaccinations
                or medications, staying hydrated, washing your hands frequently,
                and using sunscreen and insect repellent. It's also essential to
                keep your valuables safe and secure and to be aware of your
                surroundings at all times.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="lg:text-[24px] text-[20px] font-semibold">
                Immerse yourself in the local culture
              </h2>
              <p className="lg:text-[20px]">
                One of the most rewarding aspects of traveling is immersing
                yourself in the local culture and customs. This includes trying
                local cuisine, attending cultural events and festivals, and
                interacting with locals. Learning a few phrases in the local
                language can also go a long way in making connections and
                showing respect.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="lg:text-[24px] text-[20px] font-semibold">
                Capture Memories
              </h2>
              <p className="lg:text-[20px]">
                Finally, don't forget to capture memories of your journey.
                Whether it's through photographs, journaling, or souvenirs,
                preserving the moments and experiences of your travels can bring
                joy and nostalgia for years to come. However, it's also
                essential to be present in the moment and not let technology
                distract you from the beauty of your surroundings.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="lg:text-[24px] text-[20px] font-semibold">
                Conclusion
              </h2>
              <p className="lg:text-[20px]">
                Traveling is an art form that requires a blend of planning,
                preparation, and spontaneity. By following these tips and
                tricks, you can make the most of your journey and create
                memories that last a lifetime. So pack your bags, embrace the
                adventure, and enjoy the ride.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="lg:text-[20px]">Share this post</h2>
              <div className="flex space-x-4">
                <LinkedIn />
                <Twitter />
                <Facebook />
                <Instagram />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Container>
  );
};

export default BlogPost;
