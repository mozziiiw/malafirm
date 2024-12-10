"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2 } from 'lucide-react'

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
}

export default function ContactForm() {
    const [qualifications, setQualifications] = useState([{ id: 1 }])
    const [experience, setExperience] = useState([{ id: 1 }])

    const addQualification = () => {
        setQualifications([...qualifications, { id: Date.now() }])
    }

    const addExperience = () => {
        setExperience([...experience, { id: Date.now() }])
    }

    const removeQualification = (id: number) => {
        setQualifications(qualifications.filter(q => q.id !== id))
    }

    const removeExperience = (id: number) => {
        setExperience(experience.filter(e => e.id !== id))
    }

    return (
        <motion.div
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto p-6"
        >
            <Card className="backdrop-blur-sm bg-white/90">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-8">
                        <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input id="fullName" placeholder="Enter your full name" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="dob">Date of Birth</Label>
                                <Input id="dob" type="date" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Enter your email" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input id="phone" placeholder="Enter your phone number" />
                            </div>
                        </motion.div>

                        <motion.div {...fadeIn} className="space-y-4">
                            <Label>Purpose of Visit</Label>
                            <RadioGroup defaultValue="legal-aid" className="grid grid-cols-2 gap-4">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="legal-aid" id="legal-aid" />
                                    <Label htmlFor="legal-aid">Legal Aid</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="consultation" id="consultation" />
                                    <Label htmlFor="consultation">Consultation</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="both" id="both" />
                                    <Label htmlFor="both">Both</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="other" id="other" />
                                    <Label htmlFor="other">Other</Label>
                                </div>
                            </RadioGroup>
                        </motion.div>

                        <motion.div {...fadeIn} className="space-y-4">
                            <Label>Marital Status</Label>
                            <RadioGroup defaultValue="single" className="grid grid-cols-2 gap-4">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="single" id="single" />
                                    <Label htmlFor="single">Single</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="married" id="married" />
                                    <Label htmlFor="married">Married</Label>
                                </div>
                            </RadioGroup>
                        </motion.div>

                        <motion.div {...fadeIn} className="space-y-4">
                            <div className="flex items-center justify-between">
                                <Label>Qualifications</Label>
                                <Button type="button" variant="outline" size="sm" onClick={addQualification}>
                                    <Plus className="w-4 h-4 mr-2" /> Add More
                                </Button>
                            </div>
                            {qualifications.map((qual) => (
                                <motion.div
                                    key={qual.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
                                >
                                    <Input placeholder="Degree Title" />
                                    <Input placeholder="Institution" />
                                    <Input placeholder="Year" />
                                    {qualifications.length > 1 && (
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            size="icon"
                                            onClick={() => removeQualification(qual.id)}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div {...fadeIn} className="space-y-4">
                            <div className="flex items-center justify-between">
                                <Label>Experience</Label>
                                <Button type="button" variant="outline" size="sm" onClick={addExperience}>
                                    <Plus className="w-4 h-4 mr-2" /> Add More
                                </Button>
                            </div>
                            {experience.map((exp) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
                                >
                                    <Input placeholder="Company Name" />
                                    <Input placeholder="Designation" />
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Start Date" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                                                <SelectItem key={year} value={year.toString()}>
                                                    {year}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {experience.length > 1 && (
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            size="icon"
                                            onClick={() => removeExperience(exp.id)}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div {...fadeIn} className="space-y-4">
                            <Label htmlFor="hear-about">How did you hear about us?</Label>
                            <Select>
                                <SelectTrigger id="hear-about">
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="social">Social Media</SelectItem>
                                    <SelectItem value="friend">Friend/Family</SelectItem>
                                    <SelectItem value="search">Search Engine</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </motion.div>

                        <motion.div {...fadeIn}>
                            <Button type="submit" className="w-full">Submit</Button>
                        </motion.div>
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    )
}

