-- CreateTable
CREATE TABLE "tasks" (
    "task_id" SERIAL NOT NULL,
    "task_title" TEXT NOT NULL,
    "task_desciption" TEXT NOT NULL,
    "is_completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("task_id")
);
