import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto p-8 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold">Greisoft</h1>
        <p className="text-lg text-gray-600">
          Building modern, scalable, and high-performance cross-platform
          applications.
        </p>
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Tech Expertise</h2>
        <div className="grid grid-cols-3 gap-4">
          {['React', 'React Native', 'Next JS'].map((tech) => (
            <Badge
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Past Projects */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Past Projects</h2>
        <div className="space-y-3 text-left">
          <Card>
            <CardContent>
              <p className="font-medium">Uber Carshare (iOS · Android · Web)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="font-medium">Car Next Door (iOS · Android · Web)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="font-medium">FMClarity (iOS · Android · Web)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="font-medium">Player.me (iOS · Android · Web)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="font-medium">Gamecaster (Desktop)</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
