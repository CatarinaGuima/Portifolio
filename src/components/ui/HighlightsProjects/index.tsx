"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "../Button";
import { FiGithub } from "react-icons/fi";
import { MdOutlineOpenInNew } from "react-icons/md";
import Image from "next/image";
import { Badge } from "../Badge";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export default function HighlightsProjectsCard({
  title,
  description,
  imageUrl,
  technologies,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <Card className="group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 w-full max-w-sm h-full flex flex-col rounded-2xl border border-gray-200 bg-card">
      {/* Image section */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={`Screenshot of ${title} project`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
      </div>

      {/* Content section */}
      <div className="flex-1 flex flex-col p-6">
        <CardHeader className="p-0 mb-4">
          <CardTitle className="text-xl font-extrabold text-gray-900 dark:text-gray-50 group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300 text-justify mt-2 line-clamp-3">
            {description}
          </CardDescription>
        </CardHeader>

        {/* Technologies tags */}
        <CardContent className="p-0 mb-5">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs font-medium px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-gray-200 hover:scale-105 transition-transform"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        {/* Action buttons */}
        <CardFooter className="p-0 mt-auto">
          <div className="flex gap-3 w-full">
            {demoUrl && (
              <Button
                asChild
                variant="default"
                size="sm"
                className="flex-1 gap-2 rounded-md shadow-sm hover:shadow-md transition"
              >
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${title}`}
                >
                  <MdOutlineOpenInNew className="h-4 w-4" />
                  Demo
                </a>
              </Button>
            )}

            {githubUrl && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="flex-1 gap-2 rounded-md border-gray-300 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code of ${title} on GitHub`}
                >
                  <FiGithub className="h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
