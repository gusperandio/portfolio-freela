import { Prisma, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const feedbackList = await prisma.feedback.findMany();

    return new NextResponse(JSON.stringify(feedbackList ? feedbackList : []), {
      status: feedbackList ? 200 : 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export async function POST(request: Request) {
  try {
    const feedbackData = await request.json();

    if (!feedbackData) {
      throw new Error("Feedback data is missing");
    }

    const feedback: Prisma.FeedbackCreateInput = feedbackData;

    const newFeedback = await prisma.feedback.create({
      data: {
        name: feedback.name,
        company: feedback.company,
        description: feedback.description,
        showName: feedback.showName,
      },
    });

    if (newFeedback)
      return new NextResponse(JSON.stringify({ ok: true }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
