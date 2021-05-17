URL：https://www.liaoxuefeng.com/wiki/896043488029600

1、安装git之后设置：
	$ git config --global user.name "Your Name"
	$ git config --global user.email "email@example.com"
2、创建一个版本库。选择一个合适的地方，创建一个空目录：
	$ mkdir learngit	//创建空文件夹
	$ cd learngit	//进入文件夹
	$ pwd		//命令用于显示当前目录
3、通过git init命令把这个目录变成Git可以管理的仓库：
	$ git init
      3.1、当前目录下多了一个.git的目录，这个目录是Git来跟踪管理版本库的
      3.2、如果没有看到.git目录，那是因为这个目录默认是隐藏的，用ls -ah命令就可以看见。
4、在learngit目录下（子目录也行）新建或者粘贴文件
      4.1、用命令git add告诉Git，把文件添加到仓库：
	$ git add readme.txt	//添加文件到仓库
      4.2、用命令git commit告诉Git，把文件提交到仓库：
	$ git commit -m "写入一个readme文件。"	//-m后面输入的是本次提交的说明
      4.3、运行git status命令看看结果：
	$ git status	//git status命令可以让我们时刻掌握仓库当前的状态
      4.4、为什么Git添加文件需要add，commit一共两步呢？因为commit可以一次提交很多文件，所以你可以多次add不同的文件，比如：
	$ git add file1.txt
	$ git add file2.txt file3.txt
	$ git commit -m "add 3 files."
5、修改readme.txt文件内容，运行git status命令看看结果：
	$ git status	//上面的命令输出告诉我们，readme.txt被修改过了，但还没有准备提交的修改。
      5.1、使用git diff命令查看之前修改的内容：
	$ git diff readme.txt 
      5.2、提交修改和提交新文件是一样的两步，第一步是git add，第二步git commit
	$ git add readme.txt
	$ git status	//git status命令可以让我们时刻掌握仓库当前的状态
	$ git commit -m "修改文件"
6、版本控制系统肯定有某个命令可以告诉我们历史记录，在Git中，我们用git log命令查看：
	$ git log		//查看历史
	$ git log --pretty=oneline	//如果嫌输出信息太多，看得眼花缭乱的，可以试试加上--pretty=oneline参数
      6.1、首先，Git必须知道当前版本是哪个版本，在Git中，用HEAD表示当前版本，也就是最新的提交1094adb...（注意我的提交ID和你的肯定不一样），	上一个版本就是HEAD^，上上一个版本就是HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100。
              回退上一个版本可以使用git reset命令：
	$ git reset --hard HEAD^
	$ cat readme.txt	//查看文件内容
      6.2、指定回到未来的某个版本：
	$ git reset --hard 32f9e
      6.3、命令git reflog用来记录你的每一次命令：
	$ git reflog
7、远程仓库
      7.1、创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有id_rsa和id_rsa.pub这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key
	$ ssh-keygen -t rsa -C "youremail@example.com"
      7.2、登陆GitHub，右上角下拉中找到“settings”，“SSH Keys”页面：然后，点“New SSH Key”，填上任意Title，在Key文本框里粘贴id_rsa.pub文件的内容：
      7.3、登陆GitHub，然后，在右上角找到“Create a new repo”按钮，创建一个新的仓库：
      7.4、在Repository name填入learngit，其他保持默认设置，点击“Create repository”按钮，就成功地创建了一个新的Git仓库：
      7.5、我们根据GitHub的提示，在本地的learngit仓库下运行命令：远程库的名字就是origin，这是Git默认的叫法，也可以改成别的，但是origin这个名字一看就知道是远程库。
	$ git remote add origin git@github.com:michaelliao/learngit.git
      7.6、可以把本地库的所有内容推送到远程库上：
	$ git push -u origin master
8、用命令git clone克隆一个本地库：
	$ git clone git@github.com:michaelliao/gitskills.git
