'use client';

import { motion } from 'framer-motion';

const skillGroups = [
	{
		label: 'Back-end',
		skills: ['Python', 'Django', 'Django REST Framework', 'JWT', 'Swagger', 'Pytest', 'Node.js'],
	},
	{
		label: 'Front-end',
		skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Zustand', 'Zod', 'jQuery', 'Bootstrap', 'Acessibilidade (VLibras)'],
	},
	{
		label: 'Banco de dados',
		skills: ['PostgreSQL', 'MySQL', 'MariaDB', 'pgloader'],
	},
	{
		label: 'Cloud e DevOps',
		skills: ['AWS (ECS, App Runner, ECR, RDS, VPC, Secrets Manager, Lambda, S3, EventBridge, Route 53, IAM)', 'Terraform', 'Docker', 'GitHub Actions', 'NGINX', 'Gunicorn'],
	},
	{
		label: 'Segurança e integrações',
		skills: ['CrowdSec (IPS)', 'Resposta a incidentes', 'Zoho CRM', 'Webhooks', 'APIs para apps React Native'],
	},
];

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
			</div>

			<div className="relative z-10 max-w-4xl w-full mx-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6"
				>
					<div className="flex items-center gap-2 mb-4">
						<div className="w-3 h-3 rounded-full bg-red-500" />
						<div className="w-3 h-3 rounded-full bg-yellow-500" />
						<div className="w-3 h-3 rounded-full bg-green-500" />
					</div>
					<div className="font-mono">
						<p className="text-green-500">$ whoami</p>
						<h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Filipe Almeida</h1>
						<p className="text-gray-400 mb-2">Fullstack Dev</p>
						<p className="text-green-500">$ skills --all</p>
						<div className="mt-2 space-y-3">
							{skillGroups.map((group) => (
								<div key={group.label}>
									<p className="text-gray-500 text-sm mb-1"># {group.label}</p>
									<div className="flex flex-wrap gap-2">
										{group.skills.map((skill) => (
											<span key={skill} className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">{skill}</span>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
