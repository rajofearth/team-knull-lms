import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CurriculumView } from "./curriculum-view";

interface CourseTabsProps {
  enrolled: boolean;
}

export function CourseTabs({ enrolled }: CourseTabsProps) {
  return (
    <Tabs defaultValue={enrolled ? "curriculum" : "overview"} className="flex flex-col w-full">
      <div className="mb-10 border-b border-border">
        <TabsList variant="line" className="h-auto gap-8 bg-transparent p-0">
          <TabsTrigger 
            value="overview" 
            className="rounded-none px-2 py-4 text-sm font-semibold text-muted-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger 
            value="curriculum" 
            className="rounded-none px-2 py-4 text-sm font-semibold text-muted-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Curriculum
          </TabsTrigger>
          <TabsTrigger 
            value="instructor" 
            className="rounded-none px-2 py-4 text-sm font-semibold text-muted-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Instructor
          </TabsTrigger>
          <TabsTrigger 
            value="reviews" 
            className="rounded-none px-2 py-4 text-sm font-semibold text-muted-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Reviews (892)
          </TabsTrigger>
          <TabsTrigger 
            value="qa" 
            className="rounded-none px-2 py-4 text-sm font-semibold text-muted-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Q&A
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="overview" className="mt-0 outline-none">
        <CurriculumView enrolled={enrolled} isOverview={true} />
      </TabsContent>

      <TabsContent value="curriculum" className="mt-0 outline-none">
        <CurriculumView enrolled={enrolled} isOverview={false} />
      </TabsContent>
    </Tabs>
  );
}
