'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Experiência
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* System Performance */}
					<div>
						<div className='grid  grid-cols-2'>
							<div className='flex flex-col justify-start'>
								<h3 className="text-xl font-semibold mb-1 text-yellow-400">Leve Saúde</h3>
								<p className="text-lg font-light italic mb-6 text-yellow-400">Estagiário</p>
							</div>
							<div className='flex justify-end'>
								<p className='text-sm text-yellow-400 italic'>(2022-2023)</p>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">API Gateway</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• P95 latency reduced from 250ms to 80ms</li>
									<li>• 99.99% availability achieved</li>
									<li>• Handles 2M requests/day</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Database Optimization</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Query response time improved by 70%</li>
									<li>• Implemented efficient indexing strategy</li>
									<li>• Reduced DB load by 45%</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Infrastructure & DevOps */}
					<div>
						<div className='grid  grid-cols-2'>
							<div className='flex flex-col justify-start'>
								<h3 className="text-xl font-semibold mb-1 text-yellow-400">CREART</h3>
								<p className="text-lg font-light italic mb-6 text-yellow-400">Professor de Informática</p>
							</div>
							<div className='flex justify-end'>
								<p className='text-sm text-yellow-400 italic'>(2018-2019)</p>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Cloud Infrastructure</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Reduced AWS costs by 35%</li>
									<li>• Implemented auto-scaling for 20+ services</li>
									<li>• Zero-downtime deployments</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">CI/CD Pipeline</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Reduced deployment time by 65%</li>
									<li>• Automated testing coverage at 90%</li>
									<li>• Integration tests success rate 99.5%</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Development & Leadership */}
					<div>
						<div className='grid  grid-cols-2'>
							<div className='flex flex-col justify-start'>
								<h3 className="text-xl font-semibold mb-1 text-yellow-400">Hospital Vitória</h3>
								<p className="text-lg font-light italic mb-6 text-yellow-400">Jovem Aprendiz</p>
							</div>
							<div className='flex justify-end'>
								<p className='text-sm text-yellow-400 italic'>(2017-2017)</p>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Code Quality</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Led adoption of TypeScript across backend</li>
									<li>• Established coding standards</li>
									<li>• Reduced technical debt by 40%</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Team Impact</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Mentored 4 junior developers</li>
									<li>• Created 30+ technical documentation guides</li>
									<li>• Led 3 major system migrations</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
