'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Projetos que Trabalhei
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Portal do Investidor',
							description: 'Sistema web para acompanhamento de investimentos, permitindo que investidores visualizem spreads, posições, extratos detalhados e validem transações em blockchain em tempo real.',
							details: [
								'Conteinerização completa com Docker para padronização do ambiente de desenvolvimento e produção',
								'Back-end desenvolvido em Django (Python), utilizando Django Allauth para autenticação e autorização seguras',
								'Integração com APIs financeiras para recuperação de dados de investimentos e acompanhamento em tempo real (pós homologação financeira)',
								'Validação de transações na blockchain Ethereum',
								'Design responsivo e mobile-first utilizando Bootstrap 5',
								'Frontend interativo com HTML5, CSS3, JavaScript e jQuery para manipulação dinâmica de dados e tabelas',
								'Pipeline de CI/CD configurado no GitHub Actions, realizando build, testes e deploy automatizado na AWS',
								'Implantação na AWS com ECR (repositório de imagens Docker) e App Runner (execução e autoscaling)',
								'Banco de dados MySQL gerenciado em AWS RDS, para alta disponibilidade',
								'Configuração de monitoramento de deploy via Webhook com o AWS EventBridge e gestão de segredos com AWS Secrets Manager',
								'Geração de spread em PDF e exportação de extratos financeiros',
								'Maior transparência e confiança para os investidores, resultando em aumento significativo da base de investimentos'
							],
							tech: [
								'Docker',
								'Python',
								'Django',
								'Django Allauth',
								'MySQL',
								'Bootstrap 5',
								'HTML5 & CSS3',
								'JavaScript & jQuery',
								'AWS ECR',
								'AWS App Runner',
								'AWS RDS',
								'AWS EventBridge',
								'AWS Secrets Manager',
								'GitHub Actions'
							],
						},

						{
							title: 'Boletador',
							description: 'Sistema que automatiza o processo de vendas de ativos, gerando contratos e iniciando transações com clientes.',
							details: [
								'Conteinerização com Docker',
								'Projeto Django com Python, consumindo APIs para geração do fluxo de vendas com o CRM do ZOHO',
								'Design responsivo com Boostrap 5',
								'Implantação na AWS usando ECR e AppRunner, com Git Actions para CI/CD',
								'Automatizado processos interno, reduzindo o tempo de conclusão de vendas',
							],
							tech: ['Docker', 'Python', 'Django', 'Boostrap 5','HTML & CSS3','JavaScript & JQuery', 'AWS ECR & AppRunner', 'AWS RDS', 'MySQL'],
						},
						{
							title: 'CFT - Compensação Fiscal Tokenizada',
							description: 'Plataforma desenvolvida para entes federativos, com foco na tokenização de precatórios para quitação de dívidas via compensação.',
							details: [
								'Conteinerização com Docker',
								'Designer Responsivo com Bootstrap 5 e Tailwind',
								'Frontend em React/Next.js com TypeScript',
								'Backend com Django e Python, utilizando Django Rest Framework',
								'Implantação na AWS usando ECR e AppRunner, com Git Actions para CI/CD E IAM Roles para segurança',
								'MVP com SQLite, estruturado para migração futura para PostgreSQL',
								'Django AllAuth para autenticação e autorização (a ser implementado)',
							],
							tech: ['Django', 'Python', 'React/Next.js', 'TypeScript', 'Docker', 'Bootstrap 5', 'Tailwind CSS', 'AWS ECR & AppRunner', 'Git Actions', 'SQLite'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Principais realizações:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
