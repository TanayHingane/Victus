import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marque";
import SectionHeader from "./ui/SectionHead";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ducimus quis odit eius veniam voluptatibus! Repudiandae quia totam perferendis exercitationem deserunt ea ducimus, cum a quae quibusdam facere neque illum!.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ducimus quis odit eius veniam voluptatibus! Repudiandae quia totam perferendis exercitationem deserunt ea ducimus, cum a quae quibusdam facere neque illum!.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ducimus quis odit eius veniam voluptatibus! Repudiandae quia totam perferendis exercitationem deserunt ea ducimus, cum a quae quibusdam facere neque illum!.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ducimus quis odit eius veniam voluptatibus! Repudiandae quia totam perferendis exercitationem deserunt ea ducimus, cum a quae quibusdam facere neque illum!.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ducimus quis odit eius veniam voluptatibus! Repudiandae quia totam perferendis exercitationem deserunt ea ducimus, cum a quae quibusdam facere neque illum!.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ducimus quis odit eius veniam voluptatibus! Repudiandae quia totam perferendis exercitationem deserunt ea ducimus, cum a quae quibusdam facere neque illum!.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <>
      <figure
        className={cn(
          "relative h-full lg:w-96 cursor-pointer overflow-hidden rounded-xl border p-4 w-80",
          // light styles
          "dark:border-gray-950/[.1] dark:bg-gray-950/[.01] dark:hover:bg-gray-950/[.05]",
          // dark styles
          "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full"
            width="60"
            height="60"
            alt=""
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="lg:text-2xl font-medium text-white text-lg md:text-lg">
              {name}
            </figcaption>
            <p className="lg:text-lg font-medium text-white/40 text-sm md:text-sm">
              {username}
            </p>
          </div>
        </div>
        <blockquote className="mt-2 lg:text-xl text-white text-base md:text-base">
          {body}
        </blockquote>
      </figure>
    </>
  );
};

export function Testimonial() {
  return (
    <div id="Review">
      <SectionHeader
        title="Work Review"
        description="See what people say about me"
      />
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden my-14">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
