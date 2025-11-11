const MobileNav = () => {
  return (
    <div
      className="flex gap-4 items-center justify-center border-x-2
    border-primary px-2 divide-primary divide-x-2"
    >
      <button className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-user-round-icon lucide-user-round"
        >
          <circle
            cx="12"
            cy="8"
            r="5"
          />
          <path d="M20 21a8 8 0 0 0-16 0" />
        </svg>
      </button>
      <button className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide
      lucide-code-icon lucide-code"
        >
          <path d="m16 18 6-6-6-6" />
          <path
            d="m8 6-6 6
      6 6"
          />
        </svg>
      </button>
      <button className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide
      lucide-biceps-flexed-icon lucide-biceps-flexed"
        >
          <path
            d="M12.409 13.017A5
      5 0 0 1 22 15c0 3.866-4 7-9 7-4.077
      0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627
      2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"
          />
          <path
            d="M15
      14a5 5 0 0 0-7.584 2"
          />
          <path
            d="M9.964 6.825C8.019 7.977 9.5 13 8
      15"
          />
        </svg>
      </button>
      <button className="text-center bg-red-400 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide
      lucide-user-star-icon lucide-user-star"
        >
          <path
            d="M16.051 12.616a1 1 0 0 1
      1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588
      1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541
      1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0
      1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1
      .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"
          />
          <path
            d="M8 15H7a4 4 0 0 0-4
      4v2"
          />
          <circle
            cx="10"
            cy="7"
            r="4"
          />
        </svg>
      </button>
      <button className="text-center bg-red-400 w-full block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide
      lucide-message-circle-code-icon lucide-message-circle-code"
        >
          <path
            d="m10
      9-3 3 3 3"
          />
          <path d="m14 15 3-3-3-3" />
          <path
            d="M2.992 16.342a2 2 0 0 1
      .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1
      1.099.092 10 10 0 1 0-4.777-4.719"
          />
        </svg>
      </button>
    </div>
  );
};

export default MobileNav;
