-- CreateTable
CREATE TABLE "public"."urls" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "originalUrl" TEXT NOT NULL,
    "shortCode" VARCHAR(10) NOT NULL,
    "password" VARCHAR(255),
    "expiresAt" TIMESTAMP(3),
    "maxClicks" INTEGER,

    CONSTRAINT "urls_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."clicks" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "country" VARCHAR(10),
    "city" VARCHAR(100),
    "region" VARCHAR(100),
    "urlId" BIGINT NOT NULL,

    CONSTRAINT "clicks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "urls_shortCode_key" ON "public"."urls"("shortCode");

-- AddForeignKey
ALTER TABLE "public"."clicks" ADD CONSTRAINT "clicks_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "public"."urls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
