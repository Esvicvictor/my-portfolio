import React from "react";

function article_1() {
	return {
		date: "28 June 2024",
		title: "The Command Line: Charade Vs Reality",
		description:
			"The subtle deception of knowing too much at a start",
		keywords: [
			"git",
			"command line",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<p>
							At some point, I was very afraid. About the command
							line, I needed to understand a few things while
							starting but I wanted to accumulate so much that I
							postponed completing a particular pdf, I kept open.
						</p>
						<p>
							I had 24 videos to watch on YouTube via my course
							recommendation but I only got to complete five
							leaving the rest to when I needed it the most
							(learning at my pace). Accumulating so much
							information is such a hassle that I do not want to
							repeat.
						</p>
						<p>
							Because of this, I neglected most of my studies
							because I wanted to complete something so
							far-fetched and that needed practical application.
							From learning a few command line basics to Setting
							up my Git environment, I've learned quite a few
							things.
						</p>{" "}
						From the Command Line Basics, I have learned:
						<ul>
							<li>
								{" "}
								How to create a folder - mkdir [then the folder
								or directory name]
							</li>{" "}
							<li>
								How to create a file - touch, cat, or echo
							</li>{" "}
							<li>
								How to write content of the file using a text
								editor like nano or vim or manually without any
								text editor
							</li>{" "}
							<li>
								How to move a file into a new folder from an
								already existing folder. For example, A is a
								folder having C as a file and B is another
								folder.
							</li>{" "}
							<li>How to delete a file - rm</li>{" "}
							<li>How to delete a directory - rmdir</li>
						</ul>
						<i>
							Your takehome should be to learn what is reguired to
							get the work started.
						</i>
						<i>
							Note: You cannot delete a directory with files
							inside unless you first delete the files before
							using "rmdir" to delete the directory or folder.
						</i>
						<h2>Thank you for reading.</h2>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "30th June 2024",
		title: "Security: SSH Key and Github Repository",
		description: "Hi! Your files are gone. How do I get it back?",
		style: ``,
		keywords: [
			"Github",
			"Repo",
			"Push",
			"Pull",
		],
		body: (
			<React.Fragment>
				<p>
					I had to set up my SSH key (security ) on Github and
					authenticate with my local machine via Git. SSH keys are a
					pair of public of public and private keys that are used to
					authenticate and establish an encrypted communication
					channel between a client (Github)and a remote machine ( my
					PC) over the internet. To build projects and have them
					preserved, you'll need something called a repo (short for
					repository) created in a Github account . It's like a folder
					that stores you files and folders for a longer period of
					time via drag and drop or pushing directly from a shell
					known as Git on your local machine. Not long talks so I
					don't get to confuse you.
				</p>

				<p>
					For the better part of saving your projects for a longer
					time in case the owner of your laptop decides to claim
					ownership (theft) or it crashes due to one thing or another,
					you'll have your works/projects unscathed. This way, your
					clients would not have you arrested on account that you
					cannot deliver whereas your PC was stolen and you failed to
					upload your project files on a Github repo. So it's best you
					upload or push your projects to a Github repo{" "}
				</p>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "22 September 2023",
		title: "Dev Challenge, FIGMA and 404 Page",
		description:
			"Paying attention to details is key",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<p>
					I had to set up my SSH key (security ) on Github and
					authenticate with my local machine via Git. SSH keys are a
					pair of public of public and private keys that are used to
					authenticate and establish an encrypted communication
					channel between a client (Github)and a remote machine ( my
					PC) over the internet. To build projects and have them
					preserved, you'll need something called a repo (short for
					repository) created in a Github account . It's like a folder
					that stores you files and folders for a longer period of
					time via drag and drop or pushing directly from a shell
					known as Git on your local machine. Not long talks so I
					don't get to confuse you.
				</p>

				<p>
					For the better part of saving your projects for a longer
					time in case the owner of your laptop decides to claim
					ownership (theft) or it crashes due to one thing or another,
					you'll have your works/projects unscathed. This way, your
					clients would not have you arrested on account that you
					cannot deliver whereas your PC was stolen and you failed to
					upload your project files on a Github repo. So it's best you
					upload or push your projects to a Github repo{" "}
				</p>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: "8 June 2023",
		title: "Version Control Vs Version Control System",
		description: "What is the difference?",
		style: ``,
		keywords: [
			"Version Control",
			"Version Control System",
			"Git",
			"Github",
		],
		body: (
			<React.Fragment>
				<div>
					<p>
						VERSION CONTROL is a system that allows you to track and
						manage changes to your code or other files over time. It
						is a way of keeping track of different versions of your
						work, allowing you to revert to earlier versions if
						necessary, and collaborate with others more efficiently.
						VERSION CONTROL SYSTEM (VCS) is a software tool that
						facilitates version control by providing a centralised
						repository where you can store and manage your code or
						files. 
						
						<p>It helps you keep track of changes made to your
						work, who made them, and when they were made. With a
						VCS, multiple people can work on the same project
						simultaneously, and changes can be merged together
						seamlessly or smoothly. Version control systems are
						tools that enable developers to track changes made to
						source code, collaborate with others, and manage
						different versions of a software project.</p> 
						
						<p>They allow
						developers to easily revert to previous versions, merge
						code changes from multiple contributors, and maintain a
						history of all modifications made to the codebase. Some
						popular VCS include Git, Subversion, and Mercurial.</p>

						<p>These tools offer various features such as branching,
						merging, tagging, and commit tracking, which allows you
						to manage your codebase more effectively and collaborate
						with others more efficiently. But with Git, you have the
						best experience ever!</p>


						<h1>TYPES OF VERSION CONTROL SYSTEM</h1>
						There are different types of version control systems.
						The last one is the safest version control system
						because of its amazing features. They include;
						<ol>
							<li>Local version control system</li>
							<li> 2. Centralised version control system</li>
							<li>3. Distributed version control system</li>
						</ol>{" "}
						<h2>1. LOCAL VERSION CONTROL SYSTEM</h2>
						<p>
							The local version control system is likened to a
							personal computer. For example, when you bought your
							system, you have preinstalled applications on it.
							But as time went on, you started having folders,
							applications, and videos, stored in the system.
							Similarly, the local version control system stores
							your files on your PC alone and cannot be accessed
							in the cloud or anywhere.
						</p>
						<p>
							It keeps a track record of any changes made to the
							code concurrently but these changes happen on your
							computer only. No one else can make any changes or
							additions to your code base unless they do it on
							your computer. This is risky because when your
							computer crashes, you could lose all the files and
							code edit in a split second.{" "}
						</p>
						<p>
							The local version control system birth other types
							of version control systems. It is the ground base or
							basement for the emergence of other control systems.
						</p>
						<h2>2. CENTRALISED VERSION CONTROL SYSTEM</h2>
						<p>
							Centralized version control system- It is a central
							copy of your project where different programmers can
							commit to making changes to the central copy.
							----Changes on the cloud ----Helps in collaboration
							Reflecting on the Local V.C.S., the changes made for
							a project only stay on your PC and no one can access
							these changes except your PC. It does not allow for
							collaboration.
						</p>
						<p>
							However, with a Centralized version control system,
							when changes are made others can collaborate on the
							project only when the owner permits you to
							collaborate(or work on it).
						</p>
						<p>
							For example, when you work on building a television,
							there can be different components of the television
							and there are different personalities handling the
							screen, the motherboard, the stand, and the hanger
							at the back. Using a local version control system to
							create the stand, it only happens on your PC and if
							there is any error found, no one can correct it. No
							one can also build the motherboard because this
							project happened on your PC alone. So if they want
							to build it, they have to come to your PC to build
							it.
						</p>
						<p>
							But with the Centralized version control system,
							developers can collaborate and build different
							components of the television. If there is an error,
							anyone can fix it because it is centralized or on
							the cloud.
						</p>
						<p>
							So if you build the motherboard, developer A can
							build the stand, developer B can build the hanger,
							developer C can build the motherboard, and so on. It
							is because with Centralized version control, access
							to the project is possible but it is left to the
							main owner to give access to it.
						</p>
						<h2>3. DISTRIBUTED VERSION CONTROL</h2>
						<p>
							Distributed version control is the easiest and most
							flexible version control system. It allows
							developers to have copies of the versions in their
							own local branch i.e. pc. Should anything happen to
							the server, the files could easily be recovered
							because the files as the name implies are
							distributed to every client or developer.
						</p>
						<p>
							Now when you are building a website, you can have
							different sections present and that can be the
							header section, the about us section, the contact
							page section, and the sign-up section.
						</p>
						<i>
							Four developers can work on this project handling:
						</i>
						<ul>
							<li>the header section</li>
							<li>the about us section</li>
							<li>the contact page section</li>
							<li>the sign-up section Developer</li>
						</ul>
						<p>
							A handles the header section Developer X handles the
							about us section Developer Y handles the contact
							section Developer Z handles the sign-up section
							There is a main server that hosts all these four
							versions or files together and they are different
							versions of the project(header, about us, contact,
							sign-up) present in the server.
						</p>
						<p>
							Each of the four developers can have each of these
							sections or versions present in their local
							branch(PC) such that when the server collapses, the
							four different files can be recovered from any of
							the four developers without a total loss(extinction)
							of the project.now.
						</p>
						<p>
							So the tool that works as the distributed version
							control is Git. Git uses distributive version
							control system where many developers can
							collaborate, commit or make changes to the project.
							Git is a distributed version control system, which
							means each user has a complete copy of the
							repository on their local machine, allowing them to
							work independently and efficiently.
						</p>
						<p>
							Users can make changes, create branches, and merge
							them back into the main codebase without requiring a
							centralized server.
						</p>
						<i>
							<b>
								Why is the Distributed Version Control System
								the most preferred?
							</b>
						</i>
						<p>
							Here are some of the reasons why the distributed
							version control system is most preferred over the
							local version control system and the centralized
							Version Control System.
						</p>
						<ol>
							<li>
								Decentralized and Offline Capabilities: In a
								DVCS, every user has a complete copy of the
								repository. This decentralization allows users
								to work independently and makes the system
								resilient to network failures or server
								downtime. Developers can commit changes, create
								branches, and perform other operations even when
								not connected to a central server. This
								flexibility is particularly valuable for
								distributed teams or developers working
								remotely.{" "}
							</li>
							<li>
								Faster Operations: DVCS systems perform most
								operations locally, without the need for
								continuous communication with a central server.
								This results in faster operations like
								committing changes, switching branches, and
								viewing revision history. Developers can work
								efficiently, as they do not have to wait for
								server round-trips for every operation.
							</li>
							<li>
								Branching and Merging Made Easy: DVCS
								systems excel in managing branches and merging
								changes. Creating branches, switching between
								them, and merging code becomes effortless and
								provides a smooth workflow for collaboration.
								Each developer can work on their own branch and
								later merge changes with others, enabling
								parallel development and reducing conflicts.
							</li>
							<li>
								Enhanced Collaboration: DVCS systems support
								seamless collaboration among developers.
								Multiple developers can work on the same project
								concurrently, pushing and pulling changes from
								their local repositories. This allows for a more
								flexible and efficient collaboration model,
								enabling teams to work together on features, bug
								fixes, or experiments simultaneously.
							</li>
							<li>
								Full Version History: Every user’s local
								repository in a DVCS contains the complete
								version history of the project. This provides a
								robust backup mechanism, ensuring that all
								revisions are stored locally. Developers have
								access to the entire history, making it easy to
								track changes, revert to previous versions, or
								investigate issues.
							</li>
						</ol>
					</p>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3, article_4];

export default myArticles;
