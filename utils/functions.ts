import { MutableRefObject } from "react";


export const formatUsers = (
  participants: Array<any>,
  myUserId: string
): string => {
  const names = participants
    ?.filter((participant) => participant?.user?.id != myUserId)
    ?.map((participant) => participant?.user?.name);

  return names?.join(", ");
};

export const getImageUrl = (
  participants: Array<any>,
  myUserId: string
): string | null => {
  const imageUrl = participants
    ?.filter(
      (participant: any) => participant?.user?.id !== myUserId
    )
    ?.map((participant: any) => participant?.user?.image)?.[0];

  return imageUrl;
};

export const scrollToBottom = (
  ref: MutableRefObject<HTMLDivElement | null>
) => {
  ref?.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
