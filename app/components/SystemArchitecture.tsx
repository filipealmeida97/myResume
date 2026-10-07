'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Projetos que Trabalhei
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {[
            {
              title: "Landing Pages – DROOM",
              description:
                "Conjunto de landing pages desenvolvidas para captação de leads de credores e investidores, com foco em performance, conversão, estabilidade e fidelidade total ao design definido no Figma. Hoje geram mais de 100 leads qualificados por semana.",
              details: [
                "Liderança no desenvolvimento das landing pages de captação de leads (Credor, Credor 02 e Investidor), desde a definição da arquitetura até a entrega em produção",
                "Colaboração direta com o time de Marketing na definição de fluxos, formulários e estratégias de conversão, garantindo alinhamento entre negócio, UX e tecnologia",
                "Desenvolvimento fiel aos layouts e ao design system definidos no Figma, assegurando consistência visual e excelente experiência do usuário",
                "Arquitetura baseada em Compound Components, promovendo reutilização, organização e escalabilidade do código",
                "Integração com o Zoho CRM para captura, validação e envio automático de leads",
                "Validação robusta de formulários utilizando Zod, assegurando integridade e confiabilidade dos dados coletados",
                "Gerenciamento de estado global com Zustand para controle dos fluxos de formulários e interações",
                "Estilização moderna e performática com Tailwind CSS, adotando abordagem mobile-first",
                "Desenvolvimento com React e Next.js, aplicando boas práticas de SEO, performance e renderização otimizada",
                "Provisionamento e publicação do ambiente em AWS EC2, com configuração de VPC, Security Groups e SSL para garantir segurança e disponibilidade",
                "Gerenciamento do processo da aplicação com PM2, assegurando alta disponibilidade e reinício automático em caso de falhas ou atualizações do servidor",
                "Contenção de um ataque de mineração de criptomoedas, aplicação da correção e implantação do CrowdSec (IPS) para bloquear novas tentativas",
                "Estrutura preparada para testes A/B, variações de campanhas e evolução contínua do produto",
                "Geração de mais de 100 leads qualificados por semana, fortalecendo as estratégias de aquisição da plataforma",
              ],
              tech: [
                "React",
                "Next.js",
                "TypeScript",
                "Zod",
                "Zustand",
                "Tailwind CSS",
                "Compound Components",
                "Zoho CRM",
                "AWS EC2",
                "VPC",
                "Security Groups",
                "SSL",
                "PM2",
                "CrowdSec (IPS)",
              ],
            },
            {
              title: "Portal do Investidor",
              description:
                "Sistema web e API para acompanhamento de investimentos, permitindo que investidores visualizem spreads, posições, extratos detalhados e validem transações em blockchain. Também serve de back-end para o app mobile em React Native.",
              details: [
                "Desenvolvimento em equipe do portal, com back-end em Django (Python) e Django Allauth para autenticação e autorização seguras",
                "Responsável por todas as APIs REST consumidas pelo app mobile em React Native, construídas com Django REST Framework",
                "Documentação das APIs com Swagger e testes automatizados com Pytest",
                "Conteinerização completa com Docker para padronização do ambiente de desenvolvimento e produção",
                "Integração com APIs financeiras para recuperação de dados de investimentos e acompanhamento em tempo real (pós homologação financeira)",
                "Validação de transações na blockchain Ethereum",
                "Design responsivo e mobile-first utilizando Bootstrap 5",
                "Frontend interativo com HTML5, CSS3, JavaScript e jQuery para manipulação dinâmica de dados e tabelas",
                "Pipeline de CI/CD configurado no GitHub Actions, realizando build, testes e deploy automatizado na AWS",
                "Implantação inicial na AWS com ECR e App Runner, posteriormente migrada para ECS com toda a infraestrutura provisionada via Terraform",
                "Banco de dados MySQL gerenciado em AWS RDS, com VPC isolada por ambiente e segredos no AWS Secrets Manager",
                "Configuração de monitoramento de deploy via Webhook com o AWS EventBridge",
                "Geração de spread em PDF e exportação de extratos financeiros",
              ],
              tech: [
                "Python",
                "Django",
                "Django REST Framework",
                "Django Allauth",
                "Swagger",
                "Pytest",
                "React Native (APIs)",
                "MySQL",
                "Docker",
                "Bootstrap 5",
                "JavaScript & jQuery",
                "AWS ECR",
                "AWS App Runner",
                "AWS ECS",
                "AWS RDS",
                "AWS EventBridge",
                "AWS Secrets Manager",
                "Terraform",
                "GitHub Actions",
              ],
            },
            {
              title: "CFT - Compensação Fiscal Tokenizada",
              description:
                "Plataforma desenvolvida para entes federativos, com foco na tokenização de precatórios para quitação de dívidas via compensação. O MVP foi apresentado às prefeituras de Resende (RJ) e Santo André (SP).",
              details: [
                "Construção em equipe do MVP da plataforma, apresentado às prefeituras de Resende (RJ) e Santo André (SP)",
                "Atuação hands-on em todas as camadas do projeto, do front-end ao back-end e infraestrutura",
                "Conteinerização da aplicação com Docker para padronização dos ambientes de desenvolvimento e produção",
                "Frontend desenvolvido em React e Next.js com TypeScript, focado em performance, escalabilidade e SEO",
                "Backend implementado em Python com Django e Django REST Framework para construção de APIs REST",
                "Design responsivo utilizando Bootstrap 5 e Tailwind CSS, garantindo usabilidade em diferentes dispositivos",
                "Implantação na AWS utilizando ECR e App Runner, com pipelines de CI/CD via GitHub Actions e uso de IAM Roles para segurança",
                "Desenvolvimento do MVP utilizando SQLite, com arquitetura preparada para migração futura para PostgreSQL",
                "Planejamento de autenticação e autorização com Django AllAuth, visando controle de acesso seguro e escalável",
              ],
              tech: [
                "Django",
                "Python",
                "Django REST Framework",
                "React",
                "Next.js",
                "TypeScript",
                "Docker",
                "Bootstrap 5",
                "Tailwind CSS",
                "AWS ECR",
                "AWS App Runner",
                "AWS IAM",
                "GitHub Actions",
                "SQLite",
              ],
            },
            {
              title: "Landing Page CFT – Prefeitura de Resende",
              description:
                "Landing page do CFT para a Prefeitura de Resende (cft.resende.droom.com.br), com foco em acessibilidade e infraestrutura 100% provisionada como código.",
              details: [
                "Liderança no desenvolvimento da landing page, da arquitetura à entrega em produção",
                "Recursos de acessibilidade com VLibras (tradução para Libras) e modo de alto contraste",
                "Desenvolvimento com React e Next.js com TypeScript e estilização com Tailwind CSS",
                "Infraestrutura AWS 100% provisionada via Terraform",
              ],
              tech: [
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "VLibras",
                "Acessibilidade",
                "Terraform",
                "AWS",
              ],
            },
            {
              title: "Boletador",
              description:
                "Sistema de registro de ordens que automatiza o processo de vendas de ativos, gerando contratos e iniciando transações com clientes.",
              details: [
                "Reformulação em equipe do sistema, com nova identidade visual e suporte a dark mode",
                "Melhoria da experiência do usuário no cadastro de ordens",
                "Implementação do cancelamento de ordens e do histórico de transações",
                "Projeto Django com Python, consumindo APIs do Zoho CRM para geração do fluxo de vendas",
                "Conteinerização com Docker",
                "Design responsivo com Bootstrap 5",
                "Implantação na AWS usando ECR e App Runner, com GitHub Actions para CI/CD",
                "Automatização de processos internos, reduzindo o tempo de conclusão de vendas",
              ],
              tech: [
                "Python",
                "Django",
                "Zoho CRM",
                "Docker",
                "Bootstrap 5",
                "HTML & CSS3",
                "JavaScript & jQuery",
                "AWS ECR & App Runner",
                "AWS RDS",
                "MySQL",
                "GitHub Actions",
              ],
            },
            {
              title: "Hannah – ERP de Processos Judiciais",
              description:
                "ERP de processos judiciais e precificação de precatórios, utilizado diariamente pelo time da DROOM.",
              details: [
                "Liderança da migração do banco de MySQL para PostgreSQL (~372 mil registros, mais de 2 GB), sem perda de dados e sem downtime relevante",
                "Provisionamento do RDS PostgreSQL via Terraform e criação de uma CLI de orquestração com Docker e pgloader, com validação de CRUD antes da virada",
                "Criação de uma CLI interna em Python que clona o banco RDS de qualquer ambiente em menos de 30 minutos",
                "Padronização da criação de branches pela CLI: feature, fix e hotfix em menos de 1 minuto e releases em menos de 3",
                "Melhoria da rastreabilidade do CI/CD: cada PR passou a indicar sua branch de origem e o ambiente onde foi mergeada",
                "Aprimoramento dos cron jobs de atualização das taxas do Banco Central, dado essencial para a precificação dos ativos",
                "Atuação full stack no dia a dia: correção de bugs, novas telas e funcionalidades",
              ],
              tech: [
                "Python",
                "PostgreSQL",
                "MySQL",
                "pgloader",
                "Docker",
                "Terraform",
                "AWS RDS",
                "GitHub Actions",
                "Cron Jobs",
              ],
            },
            {
              title: "Infraestrutura AWS e Segurança – DROOM",
              description:
                "Provisionamento e evolução da infraestrutura em nuvem de todas as aplicações da DROOM, da configuração inicial à adoção completa de Infraestrutura como Código.",
              details: [
                "Liderança do provisionamento inicial da infraestrutura AWS de todas as aplicações (App Runner, ECR, RDS, VPC isolada por ambiente e Secrets Manager)",
                "Participação na migração para IaC com Terraform e ECS (services e scheduled tasks); hoje todos os ambientes são provisionados via Terraform",
                "Resposta a incidente: contenção de um ataque de mineração de criptomoedas nas landing pages, aplicação da correção e implantação do CrowdSec (IPS) para bloquear novas tentativas",
              ],
              tech: [
                "Terraform",
                "AWS ECS",
                "AWS App Runner",
                "AWS ECR",
                "AWS RDS",
                "AWS VPC",
                "AWS Secrets Manager",
                "AWS IAM",
                "CrowdSec (IPS)",
                "Docker",
              ],
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
                <h4 className="text-lg font-semibold mb-2">
                  Principais realizações:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20"
                  >
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
